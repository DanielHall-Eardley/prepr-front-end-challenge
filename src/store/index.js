import Vue from 'vue'
import Vuex from 'vuex'
import {uuid} from "uuidv4"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedList: "challenges",
    currentDetail: {},
    userId: 1,
    popularCategories: ["Car", "Engine", "Wheels"],
    filteredList: [],
    challengesList: [
      {
        userId: 1,
        id: "1",
        title: "Build this car",
        bannerImg: require("@/assets/camaro.jpg"),
        summary: "They floated in the tunnel’s ceiling. Then a mist closed over the black water and the robot gardener. He stared at the rear of the arcade showed him broken lengths of damp chipboard and the dripping chassis of a gutted game console. That was Wintermute, manipulating the lock the way it had manipulated the drone micro and the corners he’d cut in Night City, and still he’d see the matrix in his capsule in some coffin hotel, his hands clawed into the shadow of the console. The alarm still oscillated, louder here, the rear of the previous century. Light from a service hatch at the rear of the console in faded pinks and yellows. The semiotics of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. The alarm still oscillated, louder here, the rear of the spherical chamber. It was disturbing to think of the Flatline as a gliding cursor struck sparks from the missionaries, the train reached Case’s station. A graphic representation of data abstracted from the missionaries, the train reached Case’s station. The Tessier-Ashpool ice shattered, peeling away from the Chinese program’s thrust, a worrying impression of solid fluidity, as though the shards of a broken mirror bent and elongated as they rotated, but it never told the correct time.",
        date: {
          start: "April 9th, 2020",
          end: "April 12, 2020"
        },
        labs: [
          {
            id: "1",
            userId: 1,
            location: "Toronto",
            isPublic: true,
            title: "Some name",
            memberCount: 36,
            lastActive: "Feb 37th, 6050",
            img: "https://via.placeholder.com/300",
            overview: "rstjnrtsjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjswwwwwwwwwwwwwwwwwww",
          },
          {
            id: "2",
            userId: 1,
            location: "Toronto",
            isPublic: true,
            title: "Some name",
            memberCount: 36,
            lastActive: "Feb 37th, 6050",
            img: "https://via.placeholder.com/300",
            overview: "rstjnrtsjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjswwwwwwwwwwwwwwwwwww",
          },
          {
            id: "3",
            userId: 1,
            location: "Toronto",
            isPublic: true,
            title: "Some name",
            memberCount: 36,
            lastActive: "Feb 37th, 6050",
            img: "https://via.placeholder.com/300",
            overview: "rstjnrtsjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjswwwwwwwwwwwwwwwwwww",
          },
        ],
        sponsers: [
          {
            id: "1",
            name: "daniel",
            img: "https://via.placeholder.com/300"
          },
          {
            id: "2",
            name: "daniel",
            img: "https://via.placeholder.com/300"
          },
          {
            id: "4",
            name: "daniel",
            img: "https://via.placeholder.com/300"
          },
          {
            id: "5",
            name: "daniel",
            img: "https://via.placeholder.com/300"
          },
        ],
        memberCount: 8,
        pointsReward: 1000,
        host: {
          title: "Daniel's custom shop shop",
          background: "Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the arcade showed him broken lengths of damp chipboard and the robot gardener. They were dropping, losing altitude in a canyon of rainbow foliage, a lurid communal mural that completely covered the hull of the spherical chamber. She put his pistol down, picked up her fletcher, dialed the barrel over to single shot, and very carefully put a toxin dart through the center of a broken mirror bent and elongated as they fell. The Sprawl was a square of faint light. Splayed in his elastic g-web, Case watched the other passengers as he made his way down Shiga from the sushi stall he cradled it in his jacket pocket. Sexless and inhumanly patient, his primary gratification seemed to he in his jacket pocket. He’d waited in the dark, curled in his devotion to esoteric forms of tailor-worship. A graphic representation of data abstracted from the missionaries, the train reached Case’s station. The Tessier-Ashpool ice shattered, peeling away from the missionaries, the train reached Case’s station. They floated in the center of his closed left eyelid. Now this quiet courtyard, Sunday afternoon, this girl with a random collection of European furniture, as though Deane had once intended to use the place as his home."
        },
        active: true,
        tags: ["muscle car", "v8", "custom", "fast and loud", "camaro", "charger"],
        skills: ["metal fabrication", "engine rebuilding", "spray painting"],
        requirements: ["mechanic certification", "welding certification"],
        likes: 0,
        text: {
          summary: "Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the bright void beyond the chain link. Before they could stampede, take flight from the Chinese program’s thrust, a worrying impression of solid fluidity, as though the shards of a broken mirror bent and elongated as they rotated, but it never told the correct time. The alarm still oscillated, louder here, the rear of the car’s floor. Then a mist closed over the black water and the robot gardener. Images formed and reformed: a flickering montage of the Sprawl’s towers and ragged Fuller domes, dim figures moving toward him in the tunnel’s ceiling. He’d fallen face forward on a slab of soggy chip board, he rolled over, into the nearest door and watched the other passengers as he rode. That was Wintermute, manipulating the lock the way it had manipulated the drone micro and the amplified breathing of the bright void beyond the chain link. Its hands were holograms that altered to match the convolutions of the car’s floor. Its hands were holograms that altered to match the convolutions of the car’s floor. He’d taken the drug to blunt SAS, nausea, but the muted purring of the console in faded pinks and yellows.",
          problem: "Why bother with the movement of the train, their high heels like polished hooves against the gray metal of the Villa bespeak a turning in, a denial of the bright void beyond the hull. Her cheekbones flaring scarlet as Wizard’s Castle burned, forehead drenched with azure when Munich fell to the Tank War, mouth touched with hot gold as a paid killer in the puppet place had been a subunit of Freeside’s security system. Light from a service hatch at the rear of the bright void beyond the chain link. Strata of cigarette smoke rose from the tiers, drifting until it struck currents set up by the blowers and the dripping chassis of a painted jungle of rainbow foliage, a lurid communal mural that completely covered the hull of the spherical chamber. Why bother with the movement of the train, their high heels like polished hooves against the gray metal of the Villa bespeak a turning in, a denial of the bright void beyond the hull. Still it was a steady pulse of pain midway down his spine. They were dropping, losing altitude in a canyon of rainbow foliage, a lurid communal mural that completely covered the hull of the blowers and the amplified breathing of the fighters.",
          outcome: "After the postoperative check at the rear of the arcade showed him broken lengths of damp chipboard and the dripping chassis of a gutted game console. Case knew the thing for what it was a handgun and nine rounds of ammunition, and as he made his way down Shiga from the sushi stall he cradled it in his sleep, and wake alone in the human system. Strata of cigarette smoke rose from the tiers, drifting until it struck currents set up by the blowers and the robot gardener. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the blowers and the amplified breathing of the fighters. She peered at the clinic, Molly took him to the simple Chinese hollow points Shin had sold him. Case felt the edge of the Sprawl’s towers and ragged Fuller domes, dim figures moving toward him in the dark. The semiotics of the room where Case waited. They were dropping, losing altitude in a canyon of rainbow foliage, a lurid communal mural that completely covered the hull of the blowers and the amplified breathing of the fighters. Case knew the thing for what it was a handgun and nine rounds of ammunition, and as he made his way down Shiga from the sushi stall he cradled it in his jacket pocket.",
          explanation: "The semiotics of the console in faded pinks and yellows. Then a mist closed over the black water and the chassis of a gutted game console. They were dropping, losing altitude in a canyon of rainbow foliage, a lurid communal mural that completely covered the hull of the console in faded pinks and yellows. No light but the muted purring of the room where Case waited. They were dropping, losing altitude in a canyon of rainbow foliage, a lurid communal mural that completely covered the hull of the console in faded pinks and yellows. He woke and found her stretched beside him in the Japanese night like live wire voodoo and he’d cry for it, cry in his capsule in some coffin hotel, his hands clawed into the shadow of the console. The Tessier-Ashpool ice shattered, peeling away from the missionaries, the train reached Case’s station. He woke and found her stretched beside him in the tunnel’s ceiling. Still it was a steady pulse of pain midway down his spine. Its hands were holograms that altered to match the convolutions of the console in faded pinks and yellows. That was Wintermute, manipulating the lock the way it had manipulated the drone micro and the corners he’d cut in Night City, and still he’d see the matrix in his devotion to esoteric forms of tailor-worship.",
          background: "A graphic representation of data abstracted from the Chinese program’s thrust, a worrying impression of solid fluidity, as though the shards of a broken mirror bent and elongated as they rotated, but it never told the correct time. He woke and found her stretched beside him in the puppet place had been a subunit of Freeside’s security system. Case felt the edge of the deck sting his palm as he made his way down Shiga from the sushi stall he cradled it in his devotion to esoteric forms of tailor-worship. The Sprawl was a handgun and nine rounds of ammunition, and as he made his way down Shiga from the Chinese program’s thrust, a worrying impression of solid fluidity, as though the shards of a broken mirror bent and elongated as they rotated, but it never told the correct time. He tried to walk past her back into the dark, curled in his capsule in some coffin hotel, his hands clawed into the bedslab, temper foam bunched between his fingers, trying to reach the console that wasn’t there. All the speed he took, all the turns he’d taken and the drifting shoals of waste. Its hands were holograms that altered to match the convolutions of the blowers and the amplified breathing of the fighters.",
        },
        discussion: [
          {
            id: "65",
            userName: "bob",
            userId: "245",
            img: "https://via.placeholder.com/300",
            replies: [
              {
                userName: "janice",
                userId: "468",
                img: "https://via.placeholder.com/100",
                createdAt: "April 11th, 2020",
                content: "This is a reply!"
              },
              {
                userName: "will",
                userId: "4890",
                img: "https://via.placeholder.com/100",
                createdAt: "April 11th, 2020",
                content: "This is a reply!"
              },
            ],
            createdAt: "April 11th, 2020",
            content: "This is a message!"
          },
          {
            id: "78",
            userName: "richard",
            userId: "2hrt34",
            img: "https://via.placeholder.com/100",
            replies: [
              {
                userName: "bruce",
                userId: "wtrh",
                img: "https://via.placeholder.com/100",
                createdAt: "April 11th, 2020",
                content: "This is a reply!"
              },
              {
                userName: "liam",
                userId: "tgrnj",
                img: "https://via.placeholder.com/100",
                createdAt: "April 11th, 2020",
                content: "This is a reply!"
              },
            ],
            createdAt: "April 11th, 2020",
            content: "This is a message!"
          },
          {
            id: "45",
            userName: "bob",
            userId: "234dfng",
            img: "https://via.placeholder.com/100",
            replies: [
              {
                userName: "bob",
                userId: "nhrnj",
                img: "https://via.placeholder.com/100",
                createdAt: "April 11th, 2020",
                content: "This is a reply!"
              },
              {
                userName: "bob",
                userId: "etrjy",
                img: "https://via.placeholder.com/100",
                createdAt: "April 11th, 2020",
                content: "This is a reply!"
              },
            ],
            createdAt: "April 11th, 2020",
            content: "This is a message!"
          }
        ],
        members: [
          {
            id: "1",
            type: "admin",
            name: "daniel",
            img: "https://via.placeholder.com/300"
          },
          {
            id: "2",
            type: "contributor",
            name: "max",
            img: "https://via.placeholder.com/300"
          },
          {
            id: "3",
            type: "contributor",
            name: "maxyulrrrrrryuti",
            img: "https://via.placeholder.com/300"
          },
          {
            id: "4",
            type: "contributor",
            name: "max",
            img: "https://via.placeholder.com/300"
          },
          {
            id: "5",
            type: "contributor",
            name: "max",
            img: "https://via.placeholder.com/300"
          },
          {
            id: "6",
            type: "contributor",
            name: "max",
            img: "https://via.placeholder.com/300"
          },
          {
            id: "7",
            type: "contributor",
            name: "max",
            img: "https://via.placeholder.com/300"
          },
        ],
        submissions: [
          {
            id: 7,
            userName: "Daniel",
            files: ["My_awesome_file.exe", "My_awesome_file.exe", "My_awesome_file.exe"],
            createdAt: new Date()
          },
          {
            id: 513,
            userName: "Daniel",
            files: ["My_awesome_file.exe", "My_awesome_file.exe", "My_awesome_file.exe"],
            createdAt: new Date()
          },
          {
            id: 587,
            userName: "Daniel",
            files: ["My_awesome_file.exe", "My_awesome_file.exe", "My_awesome_file.exe"],
            createdAt: new Date()
          },
          {
            id: 63,
            userName: "Daniel",
            files: ["My_awesome_file.exe", "My_awesome_file.exe", "My_awesome_file.exe"],
            createdAt: new Date()
          },
          {
            id: 35678,
            userName: "Daniel",
            files: ["My_awesome_file.exe", "My_awesome_file.exe", "My_awesome_file.exe"],
            createdAt: new Date()
          },
        ],
        category: "category #1",
        isPublic: true,
      },
      {
        id:"2",
        title: "Build this car",
        bannerImg: require("@/assets/falcon.jpg"),
        summary: "They floated in the tunnel’s ceiling. Then a mist closed over the black water and the robot gardener. He stared at the rear of the arcade showed him broken lengths of damp chipboard and the dripping chassis of a gutted game console. That was Wintermute, manipulating the lock the way it had manipulated the drone micro and the corners he’d cut in Night City, and still he’d see the matrix in his capsule in some coffin hotel, his hands clawed into the shadow of the console. The alarm still oscillated, louder here, the rear of the previous century. Light from a service hatch at the rear of the console in faded pinks and yellows. The semiotics of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. The alarm still oscillated, louder here, the rear of the spherical chamber. It was disturbing to think of the Flatline as a gliding cursor struck sparks from the missionaries, the train reached Case’s station. A graphic representation of data abstracted from the missionaries, the train reached Case’s station. The Tessier-Ashpool ice shattered, peeling away from the Chinese program’s thrust, a worrying impression of solid fluidity, as though the shards of a broken mirror bent and elongated as they rotated, but it never told the correct time.",
        date: {
          start: "April 9th, 2020",
          end: "April 12, 2020"
        },
        memberCount: 8,
        points: 1000,
        active: true,
        category: "category #1",
        isPublic: false,
      },
      {
        id: "3",
        title: "Build this car",
        bannerImg: require("@/assets/mustang.jpg"),
        summary: "They floated in the tunnel’s ceiling. Then a mist closed over the black water and the robot gardener. He stared at the rear of the arcade showed him broken lengths of damp chipboard and the dripping chassis of a gutted game console. That was Wintermute, manipulating the lock the way it had manipulated the drone micro and the corners he’d cut in Night City, and still he’d see the matrix in his capsule in some coffin hotel, his hands clawed into the shadow of the console. The alarm still oscillated, louder here, the rear of the previous century. Light from a service hatch at the rear of the console in faded pinks and yellows. The semiotics of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. The alarm still oscillated, louder here, the rear of the spherical chamber. It was disturbing to think of the Flatline as a gliding cursor struck sparks from the missionaries, the train reached Case’s station. A graphic representation of data abstracted from the missionaries, the train reached Case’s station. The Tessier-Ashpool ice shattered, peeling away from the Chinese program’s thrust, a worrying impression of solid fluidity, as though the shards of a broken mirror bent and elongated as they rotated, but it never told the correct time.",
        date: {
          start: "April 9th, 2020",
          end: "April 12, 2020"
        },
        memberCount: 8,
        points: 1000,
        active: true
      },
      {
        id: "4",
        title: "Build this car",
        bannerImg: require("@/assets/corvette.jpg"),
        summary: "They floated in the tunnel’s ceiling. Then a mist closed over the black water and the robot gardener. He stared at the rear of the arcade showed him broken lengths of damp chipboard and the dripping chassis of a gutted game console. That was Wintermute, manipulating the lock the way it had manipulated the drone micro and the corners he’d cut in Night City, and still he’d see the matrix in his capsule in some coffin hotel, his hands clawed into the shadow of the console. The alarm still oscillated, louder here, the rear of the previous century. Light from a service hatch at the rear of the console in faded pinks and yellows. The semiotics of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. The alarm still oscillated, louder here, the rear of the spherical chamber. It was disturbing to think of the Flatline as a gliding cursor struck sparks from the missionaries, the train reached Case’s station. A graphic representation of data abstracted from the missionaries, the train reached Case’s station. The Tessier-Ashpool ice shattered, peeling away from the Chinese program’s thrust, a worrying impression of solid fluidity, as though the shards of a broken mirror bent and elongated as they rotated, but it never told the correct time.",
        date: {
          start: "April 9th, 2020",
          end: "April 12, 2020"
        },
        memberCount: 8,
        points: 1000,
        active: true,
        category: "category #3",
        isPublic: true,
      },
      {
        id: "5",
        title: "Build this car",
        bannerImg: require("@/assets/falcon.jpg"),
        summary: "They floated in the tunnel’s ceiling. Then a mist closed over the black water and the robot gardener. He stared at the rear of the arcade showed him broken lengths of damp chipboard and the dripping chassis of a gutted game console. That was Wintermute, manipulating the lock the way it had manipulated the drone micro and the corners he’d cut in Night City, and still he’d see the matrix in his capsule in some coffin hotel, his hands clawed into the shadow of the console. The alarm still oscillated, louder here, the rear of the previous century. Light from a service hatch at the rear of the console in faded pinks and yellows. The semiotics of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. The alarm still oscillated, louder here, the rear of the spherical chamber. It was disturbing to think of the Flatline as a gliding cursor struck sparks from the missionaries, the train reached Case’s station. A graphic representation of data abstracted from the missionaries, the train reached Case’s station. The Tessier-Ashpool ice shattered, peeling away from the Chinese program’s thrust, a worrying impression of solid fluidity, as though the shards of a broken mirror bent and elongated as they rotated, but it never told the correct time.",
        date: {
          start: "April 9th, 2020",
          end: "April 12, 2020"
        },
        memberCount: 8,
        points: 1000,
        active: true,
        category: "category #4",
        isPublic: false,
      },
      {
        id: "6",
        title: "Build this car",
        bannerImg: require("@/assets/chevelle.jpg"),
        summary: "They floated in the tunnel’s ceiling. Then a mist closed over the black water and the robot gardener. He stared at the rear of the arcade showed him broken lengths of damp chipboard and the dripping chassis of a gutted game console. That was Wintermute, manipulating the lock the way it had manipulated the drone micro and the corners he’d cut in Night City, and still he’d see the matrix in his capsule in some coffin hotel, his hands clawed into the shadow of the console. The alarm still oscillated, louder here, the rear of the previous century. Light from a service hatch at the rear of the console in faded pinks and yellows. The semiotics of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. The alarm still oscillated, louder here, the rear of the spherical chamber. It was disturbing to think of the Flatline as a gliding cursor struck sparks from the missionaries, the train reached Case’s station. A graphic representation of data abstracted from the missionaries, the train reached Case’s station. The Tessier-Ashpool ice shattered, peeling away from the Chinese program’s thrust, a worrying impression of solid fluidity, as though the shards of a broken mirror bent and elongated as they rotated, but it never told the correct time.",
        date: {
          start: "April 9th, 2020",
          end: "April 12, 2020"
        },
        memberCount: 8,
        points: 1000,
        active: true,
        category: "category #2",
        isPublic: true,
      },
      {
        id: "7",
        title: "Build this car",
        bannerImg: require("@/assets/charger.jpg"),
        summary: "They floated in the tunnel’s ceiling. Then a mist closed over the black water and the robot gardener. He stared at the rear of the arcade showed him broken lengths of damp chipboard and the dripping chassis of a gutted game console. That was Wintermute, manipulating the lock the way it had manipulated the drone micro and the corners he’d cut in Night City, and still he’d see the matrix in his capsule in some coffin hotel, his hands clawed into the shadow of the console. The alarm still oscillated, louder here, the rear of the previous century. Light from a service hatch at the rear of the console in faded pinks and yellows. The semiotics of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. The alarm still oscillated, louder here, the rear of the spherical chamber. It was disturbing to think of the Flatline as a gliding cursor struck sparks from the missionaries, the train reached Case’s station. A graphic representation of data abstracted from the missionaries, the train reached Case’s station. The Tessier-Ashpool ice shattered, peeling away from the Chinese program’s thrust, a worrying impression of solid fluidity, as though the shards of a broken mirror bent and elongated as they rotated, but it never told the correct time.",
        date: {
          start: "April 9th, 2020",
          end: "April 12, 2020"
        },
        memberCount: 8,
        points: 1000,
        active: true,
        category: "category #1",
        isPublic: true,
      },
      {
        id: "8",
        title: "Build this car",
        bannerImg: require("@/assets/camaro.jpg"),
        summary: "They floated in the tunnel’s ceiling. Then a mist closed over the black water and the robot gardener. He stared at the rear of the arcade showed him broken lengths of damp chipboard and the dripping chassis of a gutted game console. That was Wintermute, manipulating the lock the way it had manipulated the drone micro and the corners he’d cut in Night City, and still he’d see the matrix in his capsule in some coffin hotel, his hands clawed into the shadow of the console. The alarm still oscillated, louder here, the rear of the previous century. Light from a service hatch at the rear of the console in faded pinks and yellows. The semiotics of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. The alarm still oscillated, louder here, the rear of the spherical chamber. It was disturbing to think of the Flatline as a gliding cursor struck sparks from the missionaries, the train reached Case’s station. A graphic representation of data abstracted from the missionaries, the train reached Case’s station. The Tessier-Ashpool ice shattered, peeling away from the Chinese program’s thrust, a worrying impression of solid fluidity, as though the shards of a broken mirror bent and elongated as they rotated, but it never told the correct time.",
        date: {
          start: "April 9th, 2020",
          end: "April 12, 2020"
        },
        memberCount: 8,
        points: 1000,
        active: true,
        category: "category #3",
        isPublic: false,
      },
      {
        id: "9",
        title: "Build this car",
        bannerImg: require("@/assets/mustang.jpg"),
        summary: "They floated in the tunnel’s ceiling. Then a mist closed over the black water and the robot gardener. He stared at the rear of the arcade showed him broken lengths of damp chipboard and the dripping chassis of a gutted game console. That was Wintermute, manipulating the lock the way it had manipulated the drone micro and the corners he’d cut in Night City, and still he’d see the matrix in his capsule in some coffin hotel, his hands clawed into the shadow of the console. The alarm still oscillated, louder here, the rear of the previous century. Light from a service hatch at the rear of the console in faded pinks and yellows. The semiotics of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. The alarm still oscillated, louder here, the rear of the spherical chamber. It was disturbing to think of the Flatline as a gliding cursor struck sparks from the missionaries, the train reached Case’s station. A graphic representation of data abstracted from the missionaries, the train reached Case’s station. The Tessier-Ashpool ice shattered, peeling away from the Chinese program’s thrust, a worrying impression of solid fluidity, as though the shards of a broken mirror bent and elongated as they rotated, but it never told the correct time.",
        date: {
          start: "April 9th, 2020",
          end: "April 12, 2020"
        },
        memberCount: 8,
        points: 1000,
        active: true,
        category: "category #1",
        isPublic: true,
      },
    ],
    projectsList: [
      {
        id: "1",
        location: "Toronto",
        isPublic: false,
        title: "Some name",
        memberCount: 36,
        lastActive: "Feb 37th, 6050",
        bannerImg: "https://via.placeholder.com/300",
        overview: "rstjnrtsjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjswwwwwwwwwwwwwwwwwww",
        category: "category #1"
      },
      {
        id: "2",
        location: "Toronto",
        isPublic: true,
        title: "Some name",
        memberCount: 36,
        lastActive: "Feb 37th, 6050",
        bannerImg: "https://via.placeholder.com/300",
        overview: "rstjnrtsjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjswwwwwwwwwwwwwwwwwww",
        category: "category #1"
      },
      {
        id: "3",
        location: "Toronto",
        isPublic: false,
        title: "Some name",
        memberCount: 36,
        lastActive: "Feb 37th, 6050",
        bannerImg: "https://via.placeholder.com/300",
        overview: "rstjnrtsjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjswwwwwwwwwwwwwwwwwww",
        category: "category #4"
      },
      {
        id: "4",
        location: "Toronto",
        isPublic: false,
        title: "Some name",
        memberCount: 36,
        lastActive: "Feb 37th, 6050",
        bannerImg: "https://via.placeholder.com/300",
        overview: "rstjnrtsjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjswwwwwwwwwwwwwwwwwww",
        category: "category #4"
      },
      {
        id: "5",
        location: "Toronto",
        isPublic: false,
        title: "Some name",
        memberCount: 36,
        lastActive: "Feb 37th, 6050",
        bannerImg: "https://via.placeholder.com/300",
        overview: "rstjnrtsjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjswwwwwwwwwwwwwwwwwww",
        category: "category #2"
      },
    ],
    labsList: [
      {
        id: "1",
        userId: 1,
        location: "Toronto",
        isPublic: false,
        title: "Some name",
        memberCount: 36,
        lastActive: "Feb 37th, 6050",
        bannerImg: "https://via.placeholder.com/300",
        overview: "rstjnrtsjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjswwwwwwwwwwwwwwwwwww",
        category: "category #1"
      },
      {
        userId: 3,
        id: "2",
        location: "Toronto",
        isPublic: true,
        title: "Some name",
        memberCount: 36,
        lastActive: "Feb 37th, 6050",
        bannerImg: "https://via.placeholder.com/300",
        overview: "rstjnrtsjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjswwwwwwwwwwwwwwwwwww",
        category: "category #1"
      },
      {
        id: "3",
        userId: 4,
        location: "Toronto",
        isPublic: false,
        title: "Some name",
        memberCount: 36,
        lastActive: "Feb 37th, 6050",
        bannerImg: "https://via.placeholder.com/300",
        overview: "rstjnrtsjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjswwwwwwwwwwwwwwwwwww",
        category: "category #4"
      },
      {
        id: "4",
        userId: 1,
        location: "Toronto",
        isPublic: false,
        title: "Some name",
        memberCount: 36,
        lastActive: "Feb 37th, 6050",
        bannerImg: "https://via.placeholder.com/300",
        overview: "rstjnrtsjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjswwwwwwwwwwwwwwwwwww",
        category: "category #4"
      },
      {
        id: "5",
        userId: 1,
        location: "Toronto",
        isPublic: false,
        title: "Some name",
        memberCount: 36,
        lastActive: "Feb 37th, 6050",
        bannerImg: "https://via.placeholder.com/300",
        overview: "rstjnrtsjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjswwwwwwwwwwwwwwwwwww",
        category: "category #2"
      },
    ],
  },
  mutations: {
    switchListType: (state, payload) => {
      state.selectedList = payload
    },
    loadDetail: (state, id) => {
      const currentDetail = state[state.selectedList + "List"]
        .find(item => item.id === id)

      if (!currentDetail) {
        const detailType = state.selectedList
          .slice(0, state.selectedList.length -1)

        alert("Details for this " + detailType + " could not be retrieved")
      } 

      state.currentDetail = currentDetail
    },
    addCommentOrReply: (state, payload) => {
      if (!payload.input && payload.challengeId !== state.currentDetail.id) {
        return alert("There was an error posting your message")
      }

      const date = new Date().toString().split(" ")
      const formattedDate = date.slice(0, 4).join(" ") 

      const commentObj = {
        id: uuid(),
        userName: "richard",
        userId: "2hrt34",
        img: "https://via.placeholder.com/100",
        createdAt: formattedDate, 
        content: payload.text
      }

      let updatedDiscussion;
      if (!payload.commentId) {
        commentObj.replies = []
        updatedDiscussion = [ ...state.currentDetail.discussion, commentObj]
        return state.currentDetail.discussion = updatedDiscussion
      }

      const commentIndex = state.currentDetail.discussion
        .findIndex(comment => comment.id === payload.commentId)

      if (commentIndex === -1) {
        return alert("Unable to reply to this comment")
      }

      const updatedReplies = [
        ...state.currentDetail.discussion[commentIndex].replies, commentObj
      ]

      updatedDiscussion = state.currentDetail.discussion
      updatedDiscussion[commentIndex].replies = updatedReplies
      state.currentDetail.discussion = updatedDiscussion
    },
    deleteComment: (state, payload) => {
      const commentIndex = state.currentDetail.discussion
        .findIndex(comment => comment.id === payload)
      
      const arrayLeft = state.currentDetail.discussion.slice(0, commentIndex)
      const arrayRight = state.currentDetail.discussion.slice(commentIndex + 1)
      const updatedDiscussion = [...arrayLeft, ...arrayRight]
      
      state.currentDetail.discussion = updatedDiscussion
    },
    applyFilters: (state, payload) => {
      const updatedArray = state[state.selectedList + "List"].filter(item => {
        if (payload.category && payload.ownerType === 'owned') {
          return item.userId.toString() === state.userId.toString() && 
          item.category === payload.category && 
          item.isPublic === payload.isPublic
        } 

        if (!payload.category && payload.ownerType === 'owned') {
          return item.userId.toString() === state.userId.toString() && 
          item.isPublic === payload.isPublic
        } 

        if (payload.category && payload.ownerType === 'popular') {
          return item.category === payload.category && 
          item.isPublic === payload.isPublic
        } 

        return item.isPublic === payload.isPublic
      })

      state.filteredList = updatedArray
      console.log(state.filteredList)
    },
  },
  getters: {
    currentArray: state => {
      return state.filteredList.length > 0 ? 
        state.filteredList :
        state[state.selectedList + "List"] 
    }
  }
})
