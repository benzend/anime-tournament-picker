import { Anime } from "./types";

const data: Anime[] = [
  {
    title: "Tokyo Ghoul",
    synopsis: `
A sinister threat is invading Tokyo: flesh-eating "ghouls" who appear identical to humans and blend into their population. Reserved college student Ken Kaneki buries his nose in books and avoids the news of the growing crisis. However, the appearance of an attractive woman named Rize Kamishiro shatters his solitude when she forwardly asks him on a date.

While walking Rize home, Kaneki discovers she isn't as kind as she first appeared, and she has led him on with sinister intent. After a tragic struggle, he later awakens in a hospital to learn his life was saved by transplanting the now deceased Rize's organs into his own body.

Kaneki's body begins to change in horrifying ways, and he transforms into a human-ghoul hybrid. As he embarks on his new dreadful journey, Kaneki clings to his humanity in the evolving bloody conflict between society's new monsters and the government agents who hunt them.
`,
    labels: ["gore", "psychological"],
  },
  {
    title: "Death Note",
    synopsis: `
Brutal murders, petty thefts, and senseless violence pollute the human world. In contrast, the realm of death gods is a humdrum, unchanging gambling den. The ingenious 17-year-old Japanese student Light Yagami and sadistic god of death Ryuk share one belief: their worlds are rotten.

For his own amusement, Ryuk drops his Death Note into the human world. Light stumbles upon it, deeming the first of its rules ridiculous: the human whose name is written in this note shall die. However, the temptation is too great, and Light experiments by writing a felon's name, which disturbingly enacts his first murder.

Aware of the terrifying godlike power that has fallen into his hands, Light—under the alias Kira—follows his wicked sense of justice with the ultimate goal of cleansing the world of all evil-doers. The meticulous mastermind detective L is already on his trail, but as Light's brilliance rivals L's, the grand chase for Kira turns into an intense battle of wits that can only end when one of them is dead.
		`,
    labels: ["psychological"],
  },
  {
    title: "Boku no Hero",
    synopsis: `
The appearance of "quirks," newly discovered super powers, has been steadily increasing over the years, with 80 percent of humanity possessing various abilities from manipulation of elements to shapeshifting. This leaves the remainder of the world completely powerless, and Izuku Midoriya is one such individual.

Since he was a child, the ambitious middle schooler has wanted nothing more than to be a hero. Izuku's unfair fate leaves him admiring heroes and taking notes on them whenever he can. But it seems that his persistence has borne some fruit: Izuku meets the number one hero and his personal idol, All Might. All Might's quirk is a unique ability that can be inherited, and he has chosen Izuku to be his successor!

Enduring many months of grueling training, Izuku enrolls in UA High, a prestigious high school famous for its excellent hero training program, and this year's freshmen look especially promising. With his bizarre but talented classmates and the looming threat of a villainous organization, Izuku will soon learn what it really means to be a hero.
		`,
    labels: ["school", "super powers"],
  },
  {
    title: "Fullmetal Alchemist: Brotherhood",
    synopsis: `
After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical principle banning human transmutation, the boys attempted to bring their recently deceased mother back to life. Instead, they suffered brutal personal loss: Alphonse's body disintegrated while Edward lost a leg and then sacrificed an arm to keep Alphonse's soul in the physical realm by binding it to a hulking suit of armor.

The brothers are rescued by their neighbor Pinako Rockbell and her granddaughter Winry. Known as a bio-mechanical engineering prodigy, Winry creates prosthetic limbs for Edward by utilizing "automail," a tough, versatile metal used in robots and combat armor. After years of training, the Elric brothers set off on a quest to restore their bodies by locating the Philosopher's Stone—a powerful gem that allows an alchemist to defy the traditional laws of Equivalent Exchange.

As Edward becomes an infamous alchemist and gains the nickname "Fullmetal," the boys' journey embroils them in a growing conspiracy that threatens the fate of the world.
		`,
    labels: ["action", "adventure", "drama", "fantasy"],
  },
  {
    title: "Attack on Titan",
    synopsis: `
Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called Titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure. To ensure their survival, the remnants of humanity began living within defensive barriers, resulting in one hundred years without a single titan encounter. However, that fragile calm is soon shattered when a colossal Titan manages to breach the supposedly impregnable outer wall, reigniting the fight for survival against the man-eating abominations.

After witnessing a horrific personal loss at the hands of the invading creatures, Eren Yeager dedicates his life to their eradication by enlisting into the Survey Corps, an elite military unit that combats the merciless humanoids outside the protection of the walls. Eren, his adopted sister Mikasa Ackerman, and his childhood friend Armin Arlert join the brutal war against the Titans and race to discover a way of defeating them before the last walls are breached.
		`,
    labels: ["action", "drama", "suspense", "gore"],
  },
  {
    title: "Hunter x Hunter",
    synopsis: `
Hunters devote themselves to accomplishing hazardous tasks, all from traversing the world's uncharted territories to locating rare items and monsters. Before becoming a Hunter, one must pass the Hunter Examination—a high-risk selection process in which most applicants end up handicapped or worse, deceased.

Ambitious participants who challenge the notorious exam carry their own reason. What drives 12-year-old Gon Freecss is finding Ging, his father and a Hunter himself. Believing that he will meet his father by becoming a Hunter, Gon takes the first step to walk the same path.

During the Hunter Examination, Gon befriends the medical student Leorio Paladiknight, the vindictive Kurapika, and ex-assassin Killua Zoldyck. While their motives vastly differ from each other, they band together for a common goal and begin to venture into a perilous world.
		`,
    labels: ["action", "adventure", "fantasy"],
  },
  {
    title: "Kimi no Na wa.",
    synopsis: `
Mitsuha Miyamizu, a high school girl, yearns to live the life of a boy in the bustling city of Tokyo—a dream that stands in stark contrast to her present life in the countryside. Meanwhile in the city, Taki Tachibana lives a busy life as a high school student while juggling his part-time job and hopes for a future in architecture.

One day, Mitsuha awakens in a room that is not her own and suddenly finds herself living the dream life in Tokyo—but in Taki's body! Elsewhere, Taki finds himself living Mitsuha's life in the humble countryside. In pursuit of an answer to this strange phenomenon, they begin to search for one another.

Kimi no Na wa. revolves around Mitsuha and Taki's actions, which begin to have a dramatic impact on each other's lives, weaving them into a fabric held together by fate and circumstance.
		`,
    labels: ["drama", "supernatural", "romance"],
  },
  {
    title: "Jujutsu Kaisen",
    synopsis: `
Idly indulging in baseless paranormal activities with the Occult Club, high schooler Yuuji Itadori spends his days at either the clubroom or the hospital, where he visits his bedridden grandfather. However, this leisurely lifestyle soon takes a turn for the strange when he unknowingly encounters a cursed item. Triggering a chain of supernatural occurrences, Yuuji finds himself suddenly thrust into the world of Curses—dreadful beings formed from human malice and negativity—after swallowing the said item, revealed to be a finger belonging to the demon Sukuna Ryoumen, the King of Curses.

Yuuji experiences first-hand the threat these Curses pose to society as he discovers his own newfound powers. Introduced to the Tokyo Prefectural Jujutsu High School, he begins to walk down a path from which he cannot return—the path of a Jujutsu sorcerer.
		`,
    labels: ["action", "fantasy"],
  },
  {
    title: "Chainaw Man",
    synopsis: `
Denji is robbed of a normal teenage life, left with nothing but his deadbeat father's overwhelming debt. His only companion is his pet, the chainsaw devil Pochita, with whom he slays devils for money that inevitably ends up in the yakuza's pockets. All Denji can do is dream of a good, simple life: one with delicious food and a beautiful girlfriend by his side. But an act of greedy betrayal by the yakuza leads to Denji's brutal, untimely death, crushing all hope of him ever achieving happiness.

Remarkably, an old contract allows Pochita to merge with the deceased Denji and bestow devil powers on him, changing him into a hybrid able to transform his body parts into chainsaws. Because Denji's new abilities pose a significant risk to society, the Public Safety Bureau's elite devil hunter Makima takes him in, letting him live as long as he obeys her command. Guided by the promise of a content life alongside an attractive woman, Denji devotes everything and fights with all his might to make his naive dreams a reality.
		`,
    labels: ["action", "fantasy", "gore"],
  },
  {
    title: "Demon Slayer",
    synopsis:
      "In Taisho-era Japan, kind-hearted Tanjiro Kamado finds his family slaughtered by demons, except for his sister Nezuko, who has been transformed into a demon herself. Fueled by rage and determination, Tanjiro joins the Demon Slayer Corps, a secret organization that has been waging a clandestine war against demons for centuries. With the guidance of the seasoned demon slayer Sakonji Urokodaki, Tanjiro embarks on a journey to avenge his family and find a cure for Nezuko. As he hones his skills and faces increasingly dangerous foes, Tanjiro discovers the true extent of the threat posed by the demons and the sacrifices required to protect humanity.",
    labels: ["action", "fantasy"],
  },
  {
    title: "Vinland Saga",
    synopsis:
      "Thorfinn, son of one of the Vikings' greatest warriors, is among the finest fighters in the mercenary band led by the cunning Askeladd. However, Thorfinn is not part of the group for plunder. Instead, he seeks revenge against Askeladd for killing his father. The journey leads Thorfinn across the Viking world and eventually brings him into the historical conflict between the Danes and the English. Vinland Saga is a gripping tale of warfare, vengeance, and exploration set against the backdrop of the Viking Age.",
    labels: ["action", "fantasy"],
  },
  {
    title: "Mob Psycho 100",
    synopsis:
      "Kageyama Shigeo, known as 'Mob,' is an average middle school boy with a unique gift: he's a powerful esper with immense psychic abilities. To keep from losing control of this power, Mob constantly lives a life under an emotional shackle. He wants to live a normal life like those around him, but a barrage of trouble keeps coming after him. With his mentor, Reigen Arataka, a con artist who pretends to have psychic powers, Mob tackles various supernatural incidents while seeking to understand his own emotions and powers.",
    labels: ["action", "fantasy"],
  },
  {
    title: "One Punch Man",
    synopsis:
      "In a world where superhuman beings exist and heroes fight off powerful villains, Saitama stands out uniquely. After three years of intense training, he has become so powerful that he can defeat any opponent with a single punch. However, his overwhelming strength leads to an unexpected problem—he is perpetually bored and unable to find a worthy opponent. One Punch Man follows Saitama's adventures as he searches for excitement and meaning in his heroic duties, dealing with the mundane and the absurd in a world full of superhuman eccentricities.",
    labels: ["action", "fantasy"],
  },
  {
    title: "Violet Evergarden",
    synopsis:
      "Violet Evergarden, a former soldier who lost both arms in the Great War, is now fitted with mechanical prosthetics. After the war, she becomes an Auto Memory Doll, a ghostwriter for people who cannot write or convey their emotions. As she writes letters for various clients, she learns about the complexity of human emotions and begins to understand herself and her past, including her feelings for the major who gave her a purpose in life.",
    labels: ["drama", "slice of life", "fantasy"],
  },
  {
    title: "Made in Abyss",
    synopsis:
      "The Abyss, an enormous pit and cave system, is the only unexplored place in the world. Strange and wondrous creatures roam within it, and it is full of precious relics that current humans are unable to make. Those who venture into the Abyss are known as Cave Raiders. Rico, the daughter of the missing Cave Raider Lyza the Annihilator, is determined to find her mother. One day, she discovers a robot resembling a human boy in the Abyss. Naming him Reg, she ventures into the Abyss with him to uncover its mysteries and find her mother.",
    labels: ["adventure", "drama", "fantasy"],
  },
  {
    title: "Cyberpunk: Edgerunners",
    synopsis:
      "In a dystopian future where cybernetic enhancements are common, a street kid named David Martinez struggles to survive in the lawless streets of Night City. After a personal tragedy, David decides to take control of his destiny by becoming an edgerunner—a mercenary outlaw also known as a cyberpunk. Partnering with a team of other edgerunners, he takes on dangerous missions while navigating the complex web of crime, corruption, and cyber warfare that defines Night City.",
    labels: ["action", "sci-fi", "drama"],
  },
  {
    title: "JoJo's Bizarre Adventure",
    synopsis:
      "JoJo's Bizarre Adventure follows the Joestar family, whose members discover they are destined to take down supernatural foes using unique powers that they possess. The story spans multiple generations, with each 'JoJo'—a nickname derived from their names—facing bizarre and often otherworldly challenges. The series is known for its eccentric characters, intense battles, and imaginative storytelling.",
    labels: ["action", "adventure", "supernatural"],
  },
  {
    title: "Mushishi",
    synopsis:
      "Ginko is a 'Mushi Master,' traveling from place to place to research Mushi, ethereal creatures that embody the most basic forms of life in the world. While Mushi can be benevolent, they often cause problems for humans and their environment. Ginko investigates these occurrences, aiding those affected by Mushi and seeking to understand the connection between humans and these mysterious entities. Each episode is a self-contained story exploring the beauty and danger of the natural world.",
    labels: ["adventure", "supernatural", "drama"],
  },
  {
    title: "Spy x Family",
    synopsis:
      "In a world of espionage, Twilight is a master spy who has spent his life on undercover missions, all for the dream of a better world. But one day, he receives a particularly difficult assignment—get married and have a child. Twilight, now named Loid Forger, adopts a telepathic young girl named Anya and marries a city hall employee named Yor. However, Loid is unaware that Yor is secretly an assassin, and neither he nor Yor know Anya's secret powers. Despite this, the family must come together to fulfill Twilight's mission and uphold their secret identities.",
    labels: ["action", "comedy", "slice of life"],
  },
  {
    title: "Cowboy Bebop",
    synopsis:
      "Set in the year 2071, Cowboy Bebop follows a ragtag group of bounty hunters aboard the spaceship Bebop. The team, led by the laid-back yet deadly skilled Spike Spiegel, includes ex-cop Jet Black, con artist Faye Valentine, hacker prodigy Edward, and the intelligent corgi Ein. Each member of the crew has their own dark past that they are trying to escape. Together, they chase criminals and explore the vast reaches of space while dealing with their personal demons and the consequences of their actions.",
    labels: ["action", "sci-fi", "drama"],
  },
];

export default data;
