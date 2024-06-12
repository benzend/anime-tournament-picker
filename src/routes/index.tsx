import { A } from "@solidjs/router";

export default function Home() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">Anime Tournament Picker</h1>
			<p class="my-4">
				Throw a bunch of anime into a moshpit and see which one comes out last
			</p>
			<p class="my-10">
				<A class="text-white py-2 px-4 bg-sky-600" href="/tournament">Start</A>
			</p>
    </main>
  );
}
