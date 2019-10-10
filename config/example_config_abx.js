// configure the test here
// configure the test here
var TestConfig = {
  "TestName": "Source Separation Evaluation",
  "LoopByDefault": true,
  "ShowFileIDs": false,
  "ShowResults": false,
  "EnableABLoop": true,
  "EnableOnlineSubmission": true,
  "BeaqleServiceURL": "/synth_eval/web_service/beaqleJS_Service.php",
  "SupervisorContact": "",
  "RandomizeTestOrder": false,
  "MaxTestsPerRun": 45,
  "AudioRoot": "",
  "Testsets": [
    //
    {
      "Name": "Intelligibility 1",
      "TestID": "id0",
      "Files": {
        "A": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_scm_1.mp3",
        "B": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_ss_1.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Intelligibility 2",
      "TestID": "id1",
      "Files": {
        "A": "sep_content_audio/HezekiahJones_BorrowedHeart_scs_1.mp3",
        "B": "sep_content_audio/HezekiahJones_BorrowedHeart_scm_1.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Intelligibility 3",
      "TestID": "id2",
      "Files": {
        "A": "sep_content_audio/BrandonWebster_DontHearAThing_ss_1.mp3",
        "B": "sep_content_audio/BrandonWebster_DontHearAThing_scs_1.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Intelligibility 4",
      "TestID": "id3",
      "Files": {
        "A": "sep_content_audio/AimeeNorwich_Child_scm_1.mp3",
        "B": "sep_content_audio/AimeeNorwich_Child_scs_1.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Intelligibility 5",
      "TestID": "id4",
      "Files": {
        "A": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_scm_4.mp3",
        "B": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_ss_4.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Intelligibility 6",
      "TestID": "id5",
      "Files": {
        "A": "sep_content_audio/BrandonWebster_DontHearAThing_ss_2.mp3",
        "B": "sep_content_audio/BrandonWebster_DontHearAThing_scs_2.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Intelligibility 7",
      "TestID": "id6",
      "Files": {
        "A": "sep_content_audio/HezekiahJones_BorrowedHeart_scs_2.mp3",
        "B": "sep_content_audio/HezekiahJones_BorrowedHeart_ss_2.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Intelligibility 8",
      "TestID": "id7",
      "Files": {
        "A": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_scm_2.mp3",
        "B": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_scs_2.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Intelligibility 9",
      "TestID": "id8",
      "Files": {
        "A": "sep_content_audio/MusicDelta_Gospel_scs_2.mp3",
        "B": "sep_content_audio/MusicDelta_Gospel_ss_2.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Intelligibility 10",
      "TestID": "id9",
      "Files": {
        "A": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_ss_1.mp3",
        "B": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_scs_1.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Intelligibility 11",
      "TestID": "id10",
      "Files": {
        "A": "sep_content_audio/BrandonWebster_DontHearAThing_ss_2.mp3",
        "B": "sep_content_audio/BrandonWebster_DontHearAThing_scm_2.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Intelligibility 12",
      "TestID": "id11",
      "Files": {
        "A": "sep_content_audio/HezekiahJones_BorrowedHeart_scm_2.mp3",
        "B": "sep_content_audio/HezekiahJones_BorrowedHeart_scs_2.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Intelligibility 13",
      "TestID": "id12",
      "Files": {
        "A": "sep_content_audio/AimeeNorwich_Child_ss_1.mp3",
        "B": "sep_content_audio/AimeeNorwich_Child_scm_1.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Intelligibility 14",
      "TestID": "id13",
      "Files": {
        "A": "sep_content_audio/HezekiahJones_BorrowedHeart_scs_2.mp3",
        "B": "sep_content_audio/HezekiahJones_BorrowedHeart_scm_2.mp3",
        "X": " ",
        "Y": " ",
      }
    },
    {
      "Name": "Intelligibility 15",
      "TestID": "id14",
      "Files": {
        "A": "sep_content_audio/MusicDelta_Gospel_scm_2.mp3",
        "B": "sep_content_audio/MusicDelta_Gospel_ss_2.mp3",
        "X": " ",
        "Y": " ",
      }
    },    //
    {
      "Name": "Separation 1",
      "TestID": "id15",
      "Files": {
        "A": "sep_content_audio/AimeeNorwich_Child_mask_1.mp3",
        "B": "sep_content_audio/AimeeNorwich_Child_ss_1.mp3",
        "X": "sep_content_audio/AimeeNorwich_Child_ori_1.mp3",
        "Y": "sep_content_audio/AimeeNorwich_Child_mix_1.mp3",
      }
    },
    {
      "Name": "Separation 2",
      "TestID": "id16",
      "Files": {
        "A": "sep_content_audio/HezekiahJones_BorrowedHeart_scs_2.mp3",
        "B": "sep_content_audio/HezekiahJones_BorrowedHeart_mask_2.mp3",
        "X": "sep_content_audio/HezekiahJones_BorrowedHeart_ori_2.mp3",
        "Y": "sep_content_audio/HezekiahJones_BorrowedHeart_mix_2.mp3",
      }
    },
    {
      "Name": "Separation 3",
      "TestID": "id17",
      "Files": {
        "A": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_scm_4.mp3",
        "B": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_mask_4.mp3",
        "X": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_ori_4.mp3",
        "Y": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_mix_4.mp3",
      }
    },
    {
      "Name": "Separation 4",
      "TestID": "id18",
      "Files": {
        "A": "sep_content_audio/BrandonWebster_DontHearAThing_mask_2.mp3",
        "B": "sep_content_audio/BrandonWebster_DontHearAThing_scm_2.mp3",
        "X": "sep_content_audio/BrandonWebster_DontHearAThing_ori_2.mp3",
        "Y": "sep_content_audio/BrandonWebster_DontHearAThing_mix_2.mp3",
      }
    },
    {
      "Name": "Separation 5",
      "TestID": "id19",
      "Files": {
        "A": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_mask_2.mp3",
        "B": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_ss_2.mp3",
        "X": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_ori_2.mp3",
        "Y": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_mix_2.mp3",
      }
    },
    {
      "Name": "Separation 6",
      "TestID": "id20",
      "Files": {
        "A": "sep_content_audio/BrandonWebster_DontHearAThing_mask_1.mp3",
        "B": "sep_content_audio/BrandonWebster_DontHearAThing_scs_1.mp3",
        "X": "sep_content_audio/BrandonWebster_DontHearAThing_ori_1.mp3",
        "Y": "sep_content_audio/BrandonWebster_DontHearAThing_mix_1.mp3",
      }
    },
    {
      "Name": "Separation 7",
      "TestID": "id21",
      "Files": {
        "A": "sep_content_audio/MusicDelta_Gospel_ss_2.mp3",
        "B": "sep_content_audio/MusicDelta_Gospel_mask_2.mp3",
        "X": "sep_content_audio/MusicDelta_Gospel_ori_2.mp3",
        "Y": "sep_content_audio/MusicDelta_Gospel_mix_2.mp3",
      }
    },
    {
      "Name": "Separation 8",
      "TestID": "id22",
      "Files": {
        "A": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_mask_1.mp3",
        "B": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_scs_1.mp3",
        "X": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_ori_1.mp3",
        "Y": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_mix_1.mp3",
      }
    },
    {
      "Name": "Separation 9",
      "TestID": "id23",
      "Files": {
        "A": "sep_content_audio/HezekiahJones_BorrowedHeart_scm_1.mp3",
        "B": "sep_content_audio/HezekiahJones_BorrowedHeart_mask_1.mp3",
        "X": "sep_content_audio/HezekiahJones_BorrowedHeart_ori_1.mp3",
        "Y": "sep_content_audio/HezekiahJones_BorrowedHeart_mix_1.mp3",
      }
    },
    {
      "Name": "Separation 10",
      "TestID": "id24",
      "Files": {
        "A": "sep_content_audio/AimeeNorwich_Child_mask_1.mp3",
        "B": "sep_content_audio/AimeeNorwich_Child_scs_1.mp3",
        "X": "sep_content_audio/AimeeNorwich_Child_ori_1.mp3",
        "Y": "sep_content_audio/AimeeNorwich_Child_mix_1.mp3",
      }
    },
    {
      "Name": "Separation 11",
      "TestID": "id25",
      "Files": {
        "A": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_mask_2.mp3",
        "B": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_ss_2.mp3",
        "X": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_ori_2.mp3",
        "Y": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_mix_2.mp3",
      }
    },
    {
      "Name": "Separation 12",
      "TestID": "id26",
      "Files": {
        "A": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_scs_4.mp3",
        "B": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_mask_4.mp3",
        "X": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_ori_4.mp3",
        "Y": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_mix_4.mp3",
      }
    },
    {
      "Name": "Separation 13",
      "TestID": "id27",
      "Files": {
        "A": "sep_content_audio/MusicDelta_Gospel_scm_2.mp3",
        "B": "sep_content_audio/MusicDelta_Gospel_mask_2.mp3",
        "X": "sep_content_audio/MusicDelta_Gospel_ori_2.mp3",
        "Y": "sep_content_audio/MusicDelta_Gospel_mix_2.mp3",
      }
    },
    {
      "Name": "Separation 14",
      "TestID": "id28",
      "Files": {
        "A": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_mask_1.mp3",
        "B": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_ss_1.mp3",
        "X": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_ori_1.mp3",
        "Y": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_mix_1.mp3",
      }
    },
    {
      "Name": "Separation 15",
      "TestID": "id29",
      "Files": {
        "A": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_mask_2.mp3",
        "B": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_scm_2.mp3",
        "X": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_ori_2.mp3",
        "Y": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_mix_2.mp3",
      }
    },

    {
      "Name": "Audio Quality 1",
      "TestID": "id30",
      "Files": {
        "A": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_scm_1.mp3",
        "B": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_ss_1.mp3",
        "X":"sep_content_audio/ClaraBerryAndWooldog_AirTraffic_ori_1.mp3",
        "Y": " ",
      }
    },
    {
      "Name": "Audio Quality 2",
      "TestID": "id31",
      "Files": {
        "A": "sep_content_audio/HezekiahJones_BorrowedHeart_scs_1.mp3",
        "B": "sep_content_audio/HezekiahJones_BorrowedHeart_scm_1.mp3",
        "X": "sep_content_audio/HezekiahJones_BorrowedHeart_ori_1.mp3",
        "Y": " ",
      }
    },
    {
      "Name": "Audio Quality 3",
      "TestID": "id32",
      "Files": {
        "A": "sep_content_audio/BrandonWebster_DontHearAThing_ss_1.mp3",
        "B": "sep_content_audio/BrandonWebster_DontHearAThing_scs_1.mp3",
        "X": "sep_content_audio/BrandonWebster_DontHearAThing_ori_1.mp3",
        "Y": " ",
      }
    },
    {
      "Name": "Audio Quality 4",
      "TestID": "id33",
      "Files": {
        "A": "sep_content_audio/AimeeNorwich_Child_scm_1.mp3",
        "B": "sep_content_audio/AimeeNorwich_Child_scs_1.mp3",
        "X": "sep_content_audio/AimeeNorwich_Child_ori_1.mp3",
        "Y": " ",
      }
    },
    {
      "Name": "Audio Quality 5",
      "TestID": "id34",
      "Files": {
        "A": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_scm_4.mp3",
        "B": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_ss_4.mp3",
        "X": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_ori_4.mp3",
        "Y": " ",
      }
    },
    {
      "Name": "Audio Quality 6",
      "TestID": "id35",
      "Files": {
        "A": "sep_content_audio/BrandonWebster_DontHearAThing_ss_2.mp3",
        "B": "sep_content_audio/BrandonWebster_DontHearAThing_scs_2.mp3",
        "X": "sep_content_audio/BrandonWebster_DontHearAThing_ori_2.mp3",
        "Y": " ",
      }
    },
    {
      "Name": "Audio Quality 7",
      "TestID": "id36",
      "Files": {
        "A": "sep_content_audio/HezekiahJones_BorrowedHeart_scs_2.mp3",
        "B": "sep_content_audio/HezekiahJones_BorrowedHeart_ss_2.mp3",
        "X": "sep_content_audio/HezekiahJones_BorrowedHeart_ori_2.mp3",
        "Y": " ",
      }
    },
    {
      "Name": "Audio Quality 8",
      "TestID": "id37",
      "Files": {
        "A": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_scm_2.mp3",
        "B": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_scs_2.mp3",
        "X": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_ori_2.mp3",
        "Y": " ",
      }
    },
    {
      "Name": "Audio Quality 9",
      "TestID": "id38",
      "Files": {
        "A": "sep_content_audio/MusicDelta_Gospel_scs_2.mp3",
        "B": "sep_content_audio/MusicDelta_Gospel_ss_2.mp3",
        "X": "sep_content_audio/MusicDelta_Gospel_ori_2.mp3",
        "Y": " ",
      }
    },
    {
      "Name": "Audio Quality 10",
      "TestID": "id39",
      "Files": {
        "A": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_ss_1.mp3",
        "B": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_scs_1.mp3",
        "X": "sep_content_audio/ClaraBerryAndWooldog_AirTraffic_ori_1.mp3",
        "Y": " ",
      }
    },
    {
      "Name": "Audio Quality 11",
      "TestID": "id40",
      "Files": {
        "A": "sep_content_audio/BrandonWebster_DontHearAThing_ss_2.mp3",
        "B": "sep_content_audio/BrandonWebster_DontHearAThing_scm_2.mp3",
        "X": "sep_content_audio/BrandonWebster_DontHearAThing_ori_2.mp3",
        "Y": " ",
      }
    },
    {
      "Name": "Audio Quality 12",
      "TestID": "id41",
      "Files": {
        "A": "sep_content_audio/HezekiahJones_BorrowedHeart_scm_2.mp3",
        "B": "sep_content_audio/HezekiahJones_BorrowedHeart_scs_2.mp3",
        "X": "sep_content_audio/HezekiahJones_BorrowedHeart_ori_2.mp3",
        "Y": " ",
      }
    },
    {
      "Name": "Audio Quality 13",
      "TestID": "id42",
      "Files": {
        "A": "sep_content_audio/AimeeNorwich_Child_ss_1.mp3",
        "B": "sep_content_audio/AimeeNorwich_Child_scm_1.mp3",
        "X": "sep_content_audio/AimeeNorwich_Child_ori_1.mp3",
        "Y": " ",
      }
    },
    {
      "Name": "Audio Quality 14",
      "TestID": "id43",
      "Files": {
        "A": "sep_content_audio/HezekiahJones_BorrowedHeart_scs_2.mp3",
        "B": "sep_content_audio/HezekiahJones_BorrowedHeart_scm_2.mp3",
        "X": "sep_content_audio/HezekiahJones_BorrowedHeart_ori_2.mp3",
        "Y": " ",
      }
    },
    {
      "Name": "Audio Quality 15",
      "TestID": "id44",
      "Files": {
        "A": "sep_content_audio/MusicDelta_Gospel_scm_2.mp3",
        "B": "sep_content_audio/MusicDelta_Gospel_ss_2.mp3",
        "X": "sep_content_audio/MusicDelta_Gospel_ori_2.mp3",
        "Y": " ",
      }
    },  
  ]
}
