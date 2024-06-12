export const shuffle = (array: any[]): any[] => {
	let cloned = [...array];
  let currentIndex = cloned.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [cloned[currentIndex], cloned[randomIndex]] = [
      cloned[randomIndex], cloned[currentIndex]];
  }

	return cloned;
}
