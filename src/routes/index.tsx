import { A } from "@solidjs/router";

export default function Home() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">Starter Anime Tournament</h1>
			<p class="my-4">
				A great place for first time anime watchers or for someone trying to get their SO's into anime to pick their first anime(s) to watch!
			</p>
			<p class="my-10">
				<A class="text-white py-2 px-4 bg-sky-600" href="/tournament">Start</A>
			</p>
    </main>
  );
}
