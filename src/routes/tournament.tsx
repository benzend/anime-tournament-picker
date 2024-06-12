import { For, Show, createSignal } from "solid-js";
import data from "~/anime/data";
import type { Anime } from "~/anime/types";

export default function Tournament() {
  const total = data.length;
  const [anime, setAnime] = createSignal(data);
	const [losersInOrder, setLosersInOrder] = createSignal<Anime[]>([]);
	const [finished, setFinished] = createSignal(false);
	const [aReadMore, setAReadMore] = createSignal(false);
	const [bReadMore, setBReadMore] = createSignal(false);
	const resetReadMores = () => {
		setAReadMore(false);
		setBReadMore(false);
	};
  const select = (winner: "a" | "b") => {
		if (anime().length <= 1) return;

		resetReadMores();

		const winnerAnime = vs()[winner];
		const loserAnime = vs()[winner === "a" ? "b" : "a"];

    setAnime((prev) => {
      let newAnime = [...prev].filter(
        (anim) => {
					const didntBattle = ![vs()["a"].title, vs()["b"].title].includes(anim.title);
					return didntBattle;
				},
      );
      newAnime.push(winnerAnime);
      return newAnime;
    });

		setLosersInOrder((prev) => {
			return [loserAnime, ...prev];
		});

		if (anime().length <= 1) {
			return setFinished(true);
		};

    setVs({ a: anime()[0], b: anime()[1] });
  };
  const [vs, setVs] = createSignal({ a: anime()[0], b: anime()[1] });
  const progress = () => total - anime().length;

	const reset = () => {
		setAnime(data);
		setLosersInOrder([]);
		setFinished(false);
	};

  return (
    <main class="mx-auto text-gray-700 p-4 flex">
      <section class="min-w-40 border-r border-black h-full">
				<ol class="list-decimal list-inside">
					<For each={[...anime()].reverse()}>{(anim) =>
						<li>{anim.title}</li>
					}</For>
				</ol>
      </section>
      <section class="px-4 w-full">
				<Show when={!finished()}>
					<section class="mb-3">
						<div class="flex items-baseline justify-between gap-4 max-w-80">
							<label>Progress:</label>
							<div class="w-full bg-gray-200 rounded-full max-full h-2.5 dark:bg-gray-700">
								<div
									class="bg-sky-600 h-2.5 rounded-full"
									style={{ width: `${((progress() / total) * 100).toString()}%` }}
								></div>
							</div>
							<div class="text-gray-500 text-sm">
								{progress()}/{total}
							</div>
						</div>
					</section>

					<section class="flex gap-2">
						<section class="flex-1">
							<h3 class="text-xl">{vs().a.title}</h3>
							<ul class="flex gap-3 mt-1">
								<For each={vs().a.labels}>{(label) =>
									<li class="text-xs uppercase">{label}</li>
								}</For>
							</ul>
							<Show when={!aReadMore()}>
								<p class="mt-2">{vs().a.synopsis.substring(250, -1)}...</p>
								<button class="underline mt-2" onClick={() => setAReadMore(true)}>Read more</button>
								<br />
							</Show>
							<Show when={aReadMore()}>
								<p class="mt-2">{vs().a.synopsis}</p>
								<button class="underline mt-2" onClick={() => setAReadMore(false)}>Read less</button>
								<br />
							</Show>

							<button class="px-4 py-1 bg-sky-800 text-white mt-10" onclick={[select, "a"]}>Choose</button>
						</section>

						<section class="flex-1">
							<h3 class="text-xl">{vs().b.title}</h3>
							<ul class="flex gap-3 mt-1">
								<For each={vs().b.labels}>{(label) =>
									<li class="text-xs uppercase">{label}</li>
								}</For>
							</ul>
							<Show when={!bReadMore()}>
								<p class="mt-2">{vs().b.synopsis.substring(250, -1)}...</p>
								<button class="underline mt-2" onClick={() => setBReadMore(true)}>Read more</button>
								<br />
							</Show>
							<Show when={bReadMore()}>
								<p class="mt-2">{vs().b.synopsis}</p>
								<button class="underline mt-2" onClick={() => setBReadMore(false)}>Read less</button>
								<br />
							</Show>
							<button class="px-4 py-1 bg-sky-800 text-white mt-10" onclick={[select, "b"]}>Choose</button>
						</section>
					</section>
				</Show>
				<Show when={finished()}>
					<p>Yay!! You did it!</p>
					<h1 class="max-6-xs text-2xl text-sky-700 font-thin uppercase mt-10 mb-8">Winner: <span class="font-bold">{anime()[0].title}</span></h1>

					<h2>Top 5: </h2>
					<ol class="list-decimal list-inside">
						<For each={losersInOrder().filter((_, i) => i < 5)}>{(anim) =>
							<li>{anim.title}</li>
						}</For>
					</ol>

					<button class="py-1 px-4 text-white bg-sky-800 mt-10" onClick={reset}>Take Again</button>
				</Show>
      </section>
    </main>
  );
}
