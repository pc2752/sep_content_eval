// configure the test here
var TestConfig = {
  "TestName": "Source Separation for SATB Choirs Listening Test",
  "RateScalePng": "img/scale_abs.png",
  "RateScaleBgPng": "img/scale_abs_background.png",
  "RateMinValue": 0,
  "RateMaxValue": 100,
  "RateDefaultValue":0,
  "ShowFileIDs": false,
  "ShowResults": false,
  "LoopByDefault": true,
  "EnableABLoop": true,
  "EnableOnlineSubmission": true,
  "BeaqleServiceURL": "web_service/beaqleJS_Service.php",
  "SupervisorContact": "",
  "RandomizeTestOrder": false,
  "MaxTestsPerRun": 16,
  "RequireMaxRating": false,
  "AudioRoot": "",
  "Testsets": [
    //    
    {
      "Name": "Separation Alto",
      "TestID": "id1_1",
      "Files": {
            "Reference": "listening_test_songs/listening_eval/mixture_1.wav",
            "1": "listening_test_songs/listening_eval/all_alto_1.wav",
            "2": "listening_test_songs/listening_eval/ds_alto_1.wav",
            "3": "listening_test_songs/listening_eval/base_alto_1.wav",
            "4": "listening_test_songs/listening_eval/ds1_alto_1.wav",
            "anchor": "listening_test_songs/listening_eval/alto_1.wav",
        }
    },
    {
      "Name": "Separation Bass",
      "TestID": "id1_2",
      "Files": {
            "Reference": "listening_test_songs/listening_eval/mixture_2.wav",
            "1": "listening_test_songs/listening_eval/all_bass_2.wav",
            "2": "listening_test_songs/listening_eval/ds_bass_2.wav",
            "3": "listening_test_songs/listening_eval/base_bass_2.wav",
            "4": "listening_test_songs/listening_eval/ds1_bass_2.wav",
            "anchor": "listening_test_songs/listening_eval/bass_2.wav",
        }
    },
    {
      "Name": "Separation Tenor",
      "TestID": "id1_3",
      "Files": {
            "Reference": "listening_test_songs/listening_eval/mixture_1.wav",
            "1": "listening_test_songs/listening_eval/all_tenor_1.wav",
            "2": "listening_test_songs/listening_eval/ds_tenor_1.wav",
            "3": "listening_test_songs/listening_eval/base_tenor_1.wav",
                        "4": "listening_test_songs/listening_eval/ds1_tenor_1.wav",
            "anchor": "listening_test_songs/listening_eval/tenor_1.wav",
        }
    },
    {
      "Name": "Separation Soprano",
      "TestID": "id1_4",
      "Files": {
            "Reference": "listening_test_songs/listening_eval/mixture_1.wav",
            "1": "listening_test_songs/listening_eval/all_soprano_1.wav",
            "2": "listening_test_songs/listening_eval/ds_soprano_1.wav",
            "3": "listening_test_songs/listening_eval/base_soprano_1.wav",
            "4": "listening_test_songs/listening_eval/ds1_soprano_1.wav",
            "anchor": "listening_test_songs/listening_eval/soprano_1.wav",
        }
    },
    {
      "Name": "Quality Alto",
      "TestID": "id1_5",
      "Files": {
            "Reference": "listening_test_songs/listening_eval/alto_2.wav",
            "1": "listening_test_songs/listening_eval/all_alto_2.wav",
            "2": "listening_test_songs/listening_eval/ds_alto_2.wav",
            "3": "listening_test_songs/listening_eval/base_alto_2.wav",
              "4": "listening_test_songs/listening_eval/ds1_alto_2.wav",
            "anchor": "listening_test_songs/listening_eval/alto_2.wav",
        }
    },
    {
      "Name": "Quality Bass",
      "TestID": "id1_6",
      "Files": {
            "Reference": "listening_test_songs/listening_eval/bass_1.wav",
            "1": "listening_test_songs/listening_eval/all_bass_1.wav",
            "2": "listening_test_songs/listening_eval/ds_bass_1.wav",
            "3": "listening_test_songs/listening_eval/base_bass_1.wav",
            "4": "listening_test_songs/listening_eval/ds1_bass_1.wav",
            "anchor": "listening_test_songs/listening_eval/bass_1.wav",
        }
    },
    {
      "Name": "Quality Tenor",
      "TestID": "id1_7",
      "Files": {
            "Reference": "listening_test_songs/listening_eval/tenor_2.wav",
            "1": "listening_test_songs/listening_eval/all_tenor_2.wav",
            "2": "listening_test_songs/listening_eval/ds_tenor_2.wav",
            "3": "listening_test_songs/listening_eval/base_tenor_2.wav",
            "4": "listening_test_songs/listening_eval/ds1_tenor_2.wav",
            "anchor": "listening_test_songs/listening_eval/tenor_2.wav",
        }
    },
    {
      "Name": "Quality Soprano",
      "TestID": "id1_8",
      "Files": {
            "Reference": "listening_test_songs/listening_eval/soprano_2.wav",
            "1": "listening_test_songs/listening_eval/all_soprano_2.wav",
            "2": "listening_test_songs/listening_eval/ds_soprano_2.wav",
            "3": "listening_test_songs/listening_eval/base_soprano_2.wav",
            "4": "listening_test_songs/listening_eval/ds1_soprano_2.wav",
            "anchor": "listening_test_songs/listening_eval/soprano_2.wav",
        }
      },

    {
      "Name": "Melody Soprano",
      "TestID": "id1_9",
      "Files": {
            "Reference": "listening_test_songs/melody/soprano_unison.mp3",
            "1": "listening_test_songs/melody/soprano_sep.mp3",
            "2": "listening_test_songs/melody/soprano_weighted.mp3",
        }
      },

    {
      "Name": "Melody Alto",
      "TestID": "id1_10",
      "Files": {
            "Reference": "listening_test_songs/melody/alto_unison.mp3",
            "1": "listening_test_songs/melody/alto_sep.mp3",
            "2": "listening_test_songs/melody/alto_weighted.mp3",
        }
      },

    {
      "Name": "Melody Tenor",
      "TestID": "id1_11",
      "Files": {
            "Reference": "listening_test_songs/melody/tenor_unison.mp3",
            "1": "listening_test_songs/melody/tenor_sep.mp3",
            "2": "listening_test_songs/melody/tenor_weighted.mp3",
        }
      },

    {
      "Name": "Melody Bass",
      "TestID": "id1_12",
      "Files": {
            "Reference": "listening_test_songs/melody/bass_unison.mp3",
            "1": "listening_test_songs/melody/bass_sep.mp3",
            "2": "listening_test_songs/melody/bass_weighted.mp3",
        }
      },

    {
      "Name": "Clean Bass",
      "TestID": "id1_13",
      "Files": {
            "Reference": "listening_test_songs/melody/bass.mp3",
            "1": "listening_test_songs/esmuc_cleaning/bass_cleaned.mp3",
            "2": "listening_test_songs/esmuc_cleaning/bass_ori.mp3",
        }
      },

    {
      "Name": "Clean Soprano",
      "TestID": "id1_14",
      "Files": {
            "Reference": "listening_test_songs/melody/soprano.mp3",
            "1": "listening_test_songs/esmuc_cleaning/sop_cleaned.mp3",
            "2": "listening_test_songs/esmuc_cleaning/sop_ori.mp3",
        }
      },

    {
      "Name": "Clean Tenor",
      "TestID": "id1_15",
      "Files": {
            "Reference": "listening_test_songs/melody/tenor.mp3",
            "1": "listening_test_songs/esmuc_cleaning/tenor_cleaned.mp3",
            "2": "listening_test_songs/esmuc_cleaning/tenor_ori.mp3",
        }
      },
    {
      "Name": "Clean Alto",
      "TestID": "id1_15",
      "Files": {
            "Reference": "listening_test_songs/melody/alto.mp3",
            "1": "listening_test_songs/esmuc_cleaning/alto_cleaned.mp3",
            "2": "listening_test_songs/esmuc_cleaning/alto_ori.mp3",
        }
      },
  ]
}
