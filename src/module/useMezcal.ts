import { useMutation, useQuery } from "@tanstack/vue-query";
import { storeToRefs } from "pinia";
import { watch, computed } from "vue";
import type { Match, MatchesResponse, Form } from "./mezcalInterfaces";
import AstraAPI from "./astraApi";
import { useMainStore } from "./mainStore";

const teamMembers = [
    {
        name: "Cuishe (Juliancito)",
        value: "Cuishe",
        picture: "/images/juliancito.png"
    },
    {
        name: "Tobaishe (Fari)",
        value: "Tobaishe",
        picture: "/images/fari.png"
    },
    {
        name: "Jabalí (Mori)",
        value: "Jabali",
        picture: "/images/mori.png"
    },
    {
        name: "Tobalá (Chuy Ramos)",
        value: "Tobala",
        picture: "/images/chucho.png"
    },
    {
        name: "Espadín (Jajir)",
        value: "Espadin",
        picture: "/images/jajir.png"
    },
    {
        name: "Chomli",
        value: "Chomli",
        picture: "/images/chomli.png"
    },
]

const champions:string[] = 
[
    "Aatrox",
    "Ahri",
    "Akali",
    "Akshan",
    "Alistar",
    "Amumu",
    "Anivia",
    "Annie",
    "Aphelios",
    "Ashe",
    "AurelionSol",
    "Azir",
    "Bard",
    "Blitzcrank",
    "Brand",
    "Braum",
    "Caitlyn",
    "Camille",
    "Cassiopeia",
    "Chogath",
    "Corki",
    "Darius",
    "Diana",
    "Draven",
    "DrMundo",
    "Ekko",
    "Elise",
    "Evelynn",
    "Ezreal",
    "Fiddlesticks",
    "Fiora",
    "Fizz",
    "Galio",
    "Gangplank",
    "Garen",
    "Gnar",
    "Gragas",
    "Graves",
    "Gwen",
    "Hecarim",
    "Heimerdinger",
    "Illaoi",
    "Irelia",
    "Ivern",
    "Janna",
    "JarvanIV",
    "Jax",
    "Jayce",
    "Jhin",
    "Jinx",
    "Kaisa",
    "Kalista",
    "Karma",
    "Karthus",
    "Kassadin",
    "Katarina",
    "Kayle",
    "Kayn",
    "Kennen",
    "Khazix",
    "Kindred",
    "Kled",
    "KogMaw",
    "Leblanc",
    "LeeSin",
    "Leona",
    "Lillia",
    "Lissandra",
    "Lucian",
    "Lulu",
    "Lux",
    "Malphite",
    "Malzahar",
    "Maokai",
    "MasterYi",
    "MissFortune",
    "MonkeyKing",
    "Mordekaiser",
    "Morgana",
    "Nami",
    "Nasus",
    "Nautilus",
    "Neeko",
    "Nidalee",
    "Nocturne",
    "Nunu",
    "Olaf",
    "Orianna",
    "Ornn",
    "Pantheon",
    "Poppy",
    "Pyke",
    "Qiyana",
    "Quinn",
    "Rakan",
    "Rammus",
    "RekSai",
    "Rell",
    "Renata",
    "Renekton",
    "Rengar",
    "Riven",
    "Rumble",
    "Ryze",
    "Samira",
    "Sejuani",
    "Senna",
    "Seraphine",
    "Sett",
    "Shaco",
    "Shen",
    "Shyvana",
    "Singed",
    "Sion",
    "Sivir",
    "Skarner",
    "Sona",
    "Soraka",
    "Swain",
    "Sylas",
    "Syndra",
    "TahmKench",
    "Taliyah",
    "Talon",
    "Taric",
    "Teemo",
    "Thresh",
    "Tristana",
    "Trundle",
    "Tryndamere",
    "TwistedFate",
    "Twitch",
    "Udyr",
    "Urgot",
    "Varus",
    "Vayne",
    "Veigar",
    "Velkoz",
    "Vex",
    "Vi",
    "Viego",
    "Viktor",
    "Vladimir",
    "Volibear",
    "Warwick",
    "Xayah",
    "Xerath",
    "XinZhao",
    "Yasuo",
    "Yone",
    "Yorick",
    "Yuumi",
    "Zac",
    "Zed",
    "Zeri",
    "Ziggs",
    "Zilean",
    "Zoe",
    "Zyra"
]

const get = async (): Promise<Match[]> => {
    const { data } = await AstraAPI.get<MatchesResponse>(
      `/matches/rows`
    );
    data.data.sort((a,b) => {
        const dateA = new Date(a.ts);
        const dateB = new Date(b.ts);

        return dateB.getTime() - dateA.getTime();
    })
    return data.data;
  };

const useMezcal = () => {

    const store = useMainStore();
    const { matches } = storeToRefs(store);

    const { data, ...query } = useQuery(["matches"], () => get());

    watch(data, (matches) => {
        if (matches) store.set(matches);
      });


      const save = async (form: Form): Promise<any> => {
        const { ts, winner, ...body } = form;
        const { data } = await AstraAPI.put<any>(
          `/matches/${winner}/${ts}`,
          body
        );
        store.set(await get());
        return data;
      };
    
      const mutation = useMutation(save);
    
      const remove = async (form: Match): Promise<boolean> => {
        const { ts, winner } = form;
        const { status } = await AstraAPI.delete<any>(
          `/matches/${winner}/${ts}`
        );
        if (status === 204)
          store.set(store.matches.filter((r) => r.ts !== ts));
        else console.log("Error en el status:", status);
        return status === 204;
      };

      function countNameOccurrences(name: string): number {
        let count = 0;
        for (const obj of matches.value) {
          if (obj.name_1 === name || obj.name_2 === name) {
            count++;
          }
        }
        return count;
      }

      function countWins(name: string): number {
        let count = 0;
        for (const obj of matches.value) {
          if (obj.winner === name) {
            count++;
          }
        }
        return count;
      }

      const stats = computed(() => {
        return teamMembers.map((member) => {
            return{
                member: member.name,
                picture: member.picture,
                total: countNameOccurrences(member.value),
                wins: countWins(member.value),
            }
        }).sort((a,b) => {
            const diffA = a.wins - a.total;
  const diffB =  b.wins - b.total;

  if (diffA !== diffB) {
    // Ordenar por diferencia de mayor a menor
    return diffB - diffA;
  } else {
    // Ordenar por wins de mayor a menor
    return b.wins - a.wins;
  }
        })
      })

   return {
        matches,
        teamMembers,
        champions,
        query,
        mutation,
        remove,
        stats
    }
}

export default useMezcal