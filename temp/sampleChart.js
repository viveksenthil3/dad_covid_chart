
var ctx = document.getElementById('TOTALCASESChart').getContext('2d');
			window.myChart = new Chart(ctx, { 
			    'type' : 'line', 
			    'data' : {'labels': ['11-Sep-20', '12-Sep-20', '13-Sep-20', '14-Sep-20', '15-Sep-20', '16-Sep-20', '17-Sep-20', '18-Sep-20', '19-Sep-20', '20-Sep-20', '21-Sep-20', '22-Sep-20', '23-Sep-20', '24-Sep-20'], 'datasets': [{'label': 'USA', 'backgroundColor': 'rgba(0,0,255,0.2)', 'data': [6636247, 6676601, 6711217, 6751700, 6788147, 6828301, 6874596, 6924870, 6971424, 7009844, 7062241, 7097937, 7140116, 7185471]}, {'label': 'India', 'backgroundColor': 'rgba(165,42,42,0.2)', 'data': [4657379, 4751788, 4845003, 4926914, 5018034, 5115893, 5212686, 5305475, 5398230, 5485612, 5560105, 5640496, 5730184, 5816103]}, {'label': 'Brazil', 'backgroundColor': 'rgba(0,255,255,0.2)', 'data': [4283978, 4315858, 4330455, 4349544, 4384299, 4421686, 4457443, 4497434, 4528347, 4544629, 4560083, 4595335, 4627780, 4659909]}, {'label': 'Russia', 'backgroundColor': 'rgba(0,0,139,0.2)', 'data': [1051874, 1057362, 1062811, 1068320, 1073849, 1079519, 1085281, 1091186, 1097251, 1103399, 1109595, 1115810, 1122241, 1128836]}, {'label': 'Colombia', 'backgroundColor': 'rgba(0,139,139,0.2)', 'data': [702088, 708964, 716319, 721892, 728590, 736377, 743945, 750471, 758398, 765076, 770435, 777537, 784268, 790823]}, {'label': 'Peru', 'backgroundColor': 'rgba(184,134,11,0.2)', 'data': [716670, 722832, 729619, 733860, 738020, 744400, 750098, 756412, 762865, 768895, 772896, 776546, 782695, 788930]}, {'label': 'Mexico', 'backgroundColor': 'rgba(169,169,169,0.2)', 'data': [652364, 658299, 663973, 668381, 671716, 676487, 680931, 684113, 688954, 694121, 697663, 700580, 705263, 710049]}, {'label': 'Spain', 'backgroundColor': 'rgba(169,169,169,0.2)', 'data': [576697, 576697, 590707, 593730, 603167, 650096, 654637, 659334, 659334, 668511, 671468, 682267, 693556, 704209]}, {'label': 'Argentina', 'backgroundColor': 'rgba(0,100,0,0.2)', 'data': [535705, 546481, 555537, 565446, 577338, 589012, 601713, 613658, 622934, 631365, 640147, 652174, 664799, 678266]}, {'label': 'South Africa', 'backgroundColor': 'rgba(72,61,139,0.2)', 'data': [646398, 648214, 649793, 650749, 651521, 653444, 655572, 657627, 659656, 661211, 661936, 663282, 665188, 667049]}]}, 
			    'options' : {
            legend : {
                display : true,
                position : 'right' 
            }, 
            responsive : true, 
            title: { display: true, text: 'World Covid Status - Total Cases' },
            tooltips: { mode: 'index', intersect: true },
            
		} 
			});
			
var ctx = document.getElementById('TOTALDEATHSChart').getContext('2d');
			window.myChart = new Chart(ctx, { 
			    'type' : 'line', 
			    'data' : {'labels': ['11-Sep-20', '12-Sep-20', '13-Sep-20', '14-Sep-20', '15-Sep-20', '16-Sep-20', '17-Sep-20', '18-Sep-20', '19-Sep-20', '20-Sep-20', '21-Sep-20', '22-Sep-20', '23-Sep-20', '24-Sep-20'], 'datasets': [{'label': 'USA', 'backgroundColor': 'rgba(0,0,255,0.2)', 'data': [197421, 198128, 198520, 199000, 200197, 201334, 202213, 203167, 203824, 204118, 204502, 205481, 206596, 207538]}, {'label': 'Brazil', 'backgroundColor': 'rgba(165,42,42,0.2)', 'data': [130474, 131274, 131663, 132117, 133207, 134174, 135031, 135857, 136565, 136895, 137350, 138159, 139065, 139883]}, {'label': 'India', 'backgroundColor': 'rgba(0,255,255,0.2)', 'data': [77506, 78614, 79754, 80808, 82091, 83230, 84404, 85625, 86774, 87909, 88965, 90021, 91173, 92317]}, {'label': 'Mexico', 'backgroundColor': 'rgba(0,0,139,0.2)', 'data': [69649, 70183, 70604, 70821, 71049, 71678, 71978, 72179, 72803, 73258, 73493, 73697, 74348, 74949]}, {'label': 'UK', 'backgroundColor': 'rgba(0,139,139,0.2)', 'data': [41614, 41623, 41628, 41637, 41664, 41684, 41705, 41732, 41759, 41777, 41788, 41825, 41862, 41902]}, {'label': 'Italy', 'backgroundColor': 'rgba(184,134,11,0.2)', 'data': [35597, 35603, 35610, 35624, 35633, 35645, 35658, 35668, 35692, 35707, 35724, 35738, 35758, 35781]}, {'label': 'Peru', 'backgroundColor': 'rgba(169,169,169,0.2)', 'data': [30470, 30593, 30710, 30812, 30927, 31051, 31146, 31283, 31369, 31369, 31474, 31772, 31870, 31938]}, {'label': 'France', 'backgroundColor': 'rgba(169,169,169,0.2)', 'data': [30893, 30910, 30916, 30950, 30999, 31045, 31095, 31248, 31274, 31285, 31338, 31416, 31459, 31511]}, {'label': 'Spain', 'backgroundColor': 'rgba(0,100,0,0.2)', 'data': [29747, 29747, 29815, 29848, 30004, 30243, 30405, 30495, 30495, 30607, 30663, 30904, 31034, 31118]}, {'label': 'Iran', 'backgroundColor': 'rgba(72,61,139,0.2)', 'data': [22913, 23029, 23157, 23313, 23453, 23632, 23808, 23952, 24118, 24301, 24478, 24656, 24840, 25015]}]}, 
			    'options' : {
            legend : {
                display : true,
                position : 'right' 
            }, 
            responsive : true, 
            title: { display: true, text: 'World Covid Status - Total Deaths' },
            tooltips: { mode: 'index', intersect: true },
            
		} 
			});


var ctx = document.getElementById('TOTALRECOVEREDChart').getContext('2d');
			window.myChart = new Chart(ctx, { 
			    'type' : 'line', 
			    'data' : {'labels': ['11-Sep-20', '12-Sep-20', '13-Sep-20', '14-Sep-20', '15-Sep-20', '16-Sep-20', '17-Sep-20', '18-Sep-20', '19-Sep-20', '20-Sep-20', '21-Sep-20', '22-Sep-20', '23-Sep-20', '24-Sep-20'], 'datasets': [{'label': 'India', 'backgroundColor': 'rgba(0,0,255,0.2)', 'data': [3621438, 3699298, 3777044, 3856246, 3939111, 4022049, 4109828, 4205201, 4299724, 4392650, 4494720, 4581820, 4671850, 4752991]}, {'label': 'USA', 'backgroundColor': 'rgba(165,42,42,0.2)', 'data': [3917962, 3950354, 3974949, 4027826, 4068086, 4119158, 4155039, 4190545, 4223693, 4251489, 4299525, 4346110, 4398907, 4437575]}, {'label': 'Brazil', 'backgroundColor': 'rgba(0,255,255,0.2)', 'data': [3530655, 3553421, 3573958, 3613184, 3671128, 3720312, 3753082, 3789139, 3820095, 3851227, 3887199, 3945627, 3992886, 4023789]}, {'label': 'Russia', 'backgroundColor': 'rgba(0,0,139,0.2)', 'data': [868107, 873535, 876225, 878700, 884305, 890114, 895868, 901207, 906462, 909357, 911973, 917949, 923699, 929829]}, {'label': 'Colombia', 'backgroundColor': 'rgba(0,139,139,0.2)', 'data': [582694, 592820, 599385, 606925, 607978, 610078, 615457, 621521, 627685, 633199, 640900, 650801, 662277, 674961]}, {'label': 'Peru', 'backgroundColor': 'rgba(184,134,11,0.2)', 'data': [552214, 559321, 566796, 573364, 580753, 587717, 594513, 600795, 607837, 615255, 622418, 629094, 636489, 644345]}, {'label': 'South Africa', 'backgroundColor': 'rgba(169,169,169,0.2)', 'data': [574587, 576423, 577906, 579289, 583126, 584195, 585303, 586844, 589434, 590071, 591208, 592904, 594229, 595916]}, {'label': 'Argentina', 'backgroundColor': 'rgba(169,169,169,0.2)', 'data': [400121, 409771, 419513, 428953, 438883, 448263, 456347, 467286, 478077, 488231, 508563, 517228, 525486, 536589]}, {'label': 'Mexico', 'backgroundColor': 'rgba(0,100,0,0.2)', 'data': [458850, 463764, 467525, 471623, 475795, 481068, 485024, 488416, 492192, 496224, 499302, 502982, 506732, 510237]}, {'label': 'Chile', 'backgroundColor': 'rgba(72,61,139,0.2)', 'data': [403064, 404919, 406326, 407725, 409944, 411853, 413928, 415981, 418101, 419746, 421111, 423176, 425165, 426876]}]}, 
			    'options' : {
            legend : {
                display : true,
                position : 'right' 
            }, 
            responsive : true, 
            title: { display: true, text: 'World Covid Status - Total Recovered' },
            tooltips: { mode: 'index', intersect: true },
            
		} 
			});

var ctx = document.getElementById('NEWCASESChart').getContext('2d');
			window.myChart = new Chart(ctx, { 
			    'type' : 'line', 
			    'data' : {'labels': ['11-Sep-20', '12-Sep-20', '13-Sep-20', '14-Sep-20', '15-Sep-20', '16-Sep-20', '17-Sep-20', '18-Sep-20', '19-Sep-20', '20-Sep-20', '21-Sep-20', '22-Sep-20', '23-Sep-20', '24-Sep-20'], 'datasets': [{'label': 'India', 'backgroundColor': 'rgba(0,0,255,0.2)', 'data': [97654, 94409, 93215, 81911, 91120, 97859, 96793, 92789, 92755, 87382, 74493, 80391, 89688, 85919]}, {'label': 'USA', 'backgroundColor': 'rgba(165,42,42,0.2)', 'data': [46600, 39282, 33041, 38087, 36447, 40154, 46295, 51345, 43534, 33344, 36804, 35696, 41616, 45355]}, {'label': 'Brazil', 'backgroundColor': 'rgba(0,255,255,0.2)', 'data': [44215, 31880, 14597, 19089, 34755, 37387, 35757, 39991, 30913, 16282, 15454, 35252, 32445, 32129]}, {'label': 'France', 'backgroundColor': 'rgba(0,0,139,0.2)', 'data': [9406, 10561, 7183, 6158, 7852, 9784, 10593, 13215, 13498, 10569, 5298, 10008, 13072, 16096]}, {'label': 'Argentina', 'backgroundColor': 'rgba(0,139,139,0.2)', 'data': [11507, 10776, 9056, 9909, 11892, 11674, 12701, 11945, 9276, 8431, 8782, 12027, 12625, 13467]}, {'label': 'Spain', 'backgroundColor': 'rgba(184,134,11,0.2)', 'data': [4708, 0, 7005, 3023, 9437, 4728, 4541, 4697, 0, 4588, 2957, 10799, 11289, 10653]}, {'label': 'Israel', 'backgroundColor': 'rgba(169,169,169,0.2)', 'data': [3038, 4158, 2882, 4764, 4034, 6063, 4791, 3815, 4531, 4300, 3027, 2445, 11316, 7425]}, {'label': 'UK', 'backgroundColor': 'rgba(169,169,169,0.2)', 'data': [3539, 3497, 3330, 2619, 3105, 3991, 3395, 4322, 4422, 3899, 4368, 4926, 6178, 6633]}, {'label': 'Russia', 'backgroundColor': 'rgba(0,100,0,0.2)', 'data': [5504, 5488, 5449, 5509, 5529, 5670, 5762, 5905, 6065, 6148, 6196, 6215, 6431, 6595]}, {'label': 'Colombia', 'backgroundColor': 'rgba(72,61,139,0.2)', 'data': [7424, 6876, 7355, 5573, 6698, 7787, 7568, 6526, 7927, 6678, 5359, 7102, 6731, 6555]}]}, 
			    'options' : {
            legend : {
                display : true,
                position : 'right' 
            }, 
            responsive : true, 
            title: { display: true, text: 'World Covid Status - New Cases' },
            tooltips: { mode: 'index', intersect: true },
            
		} 
			});

var ctx = document.getElementById('NEWDEATHSChart').getContext('2d');
			window.myChart = new Chart(ctx, { 
			    'type' : 'line', 
			    'data' : {'labels': ['11-Sep-20', '12-Sep-20', '13-Sep-20', '14-Sep-20', '15-Sep-20', '16-Sep-20', '17-Sep-20', '18-Sep-20', '19-Sep-20', '20-Sep-20', '21-Sep-20', '22-Sep-20', '23-Sep-20', '24-Sep-20'], 'datasets': [{'label': 'India', 'backgroundColor': 'rgba(0,0,255,0.2)', 'data': [1202, 1108, 1140, 1054, 1283, 1139, 1174, 1221, 1149, 1135, 1056, 1056, 1152, 1144]}, {'label': 'USA', 'backgroundColor': 'rgba(165,42,42,0.2)', 'data': [1094, 707, 392, 480, 1197, 1012, 879, 954, 657, 294, 384, 979, 1115, 942]}, {'label': 'Brazil', 'backgroundColor': 'rgba(0,255,255,0.2)', 'data': [899, 800, 389, 454, 1090, 967, 857, 826, 708, 330, 455, 809, 906, 818]}, {'label': 'Mexico', 'backgroundColor': 'rgba(0,0,139,0.2)', 'data': [554, 534, 421, 217, 228, 629, 300, 201, 624, 455, 235, 204, 651, 601]}, {'label': 'Argentina', 'backgroundColor': 'rgba(0,139,139,0.2)', 'data': [241, 115, 89, 315, 185, 264, 344, 196, 143, 254, 429, 470, 424, 390]}, {'label': 'Colombia', 'backgroundColor': 'rgba(184,134,11,0.2)', 'data': [243, 216, 190, 199, 165, 190, 187, 185, 189, 169, 189, 173, 176, 178]}, {'label': 'Iran', 'backgroundColor': 'rgba(169,169,169,0.2)', 'data': [115, 116, 128, 156, 140, 179, 176, 144, 166, 183, 177, 178, 184, 175]}, {'label': 'Russia', 'backgroundColor': 'rgba(169,169,169,0.2)', 'data': [102, 119, 94, 57, 150, 132, 144, 134, 144, 79, 71, 160, 150, 149]}, {'label': 'Indonesia', 'backgroundColor': 'rgba(0,100,0,0.2)', 'data': [88, 106, 73, 118, 124, 135, 122, 114, 112, 105, 124, 160, 140, 128]}, {'label': 'Chile', 'backgroundColor': 'rgba(72,61,139,0.2)', 'data': [69, 45, 54, 64, 27, 18, 84, 57, 55, 32, 12, 23, 24, 124]}]}, 
			    'options' : {
            legend : {
                display : true,
                position : 'right' 
            }, 
            responsive : true, 
            title: { display: true, text: 'World Covid Status - New Deaths' },
            tooltips: { mode: 'index', intersect: true },
            
		} 
			});

var ctx = document.getElementById('NEWRECOVEREDChart').getContext('2d');
			window.myChart = new Chart(ctx, { 
			    'type' : 'line', 
			    'data' : {'labels': ['11-Sep-20', '12-Sep-20', '13-Sep-20', '14-Sep-20', '15-Sep-20', '16-Sep-20', '17-Sep-20', '18-Sep-20', '19-Sep-20', '20-Sep-20', '21-Sep-20', '22-Sep-20', '23-Sep-20', '24-Sep-20'], 'datasets': [{'label': 'India', 'backgroundColor': 'rgba(0,0,255,0.2)', 'data': [81455, 77860, 77746, 79202, 82865, 82938, 87779, 95373, 94523, 92926, 102070, 87100, 90030, 81141]}, {'label': 'USA', 'backgroundColor': 'rgba(165,42,42,0.2)', 'data': [38002, 32392, 24595, 52877, 40260, 51072, 35881, 36855, 33148, 26447, 48036, 46585, 52797, 38668]}, {'label': 'Brazil', 'backgroundColor': 'rgba(0,255,255,0.2)', 'data': [33318, 22766, 20537, 39226, 57944, 49184, 32770, 36057, 30956, 31132, 35972, 58428, 47259, 30903]}, {'label': 'Colombia', 'backgroundColor': 'rgba(0,0,139,0.2)', 'data': [13215, 10126, 6565, 7540, 1053, 2100, 5379, 6064, 6164, 5514, 7701, 9901, 11476, 12684]}, {'label': 'Argentina', 'backgroundColor': 'rgba(0,139,139,0.2)', 'data': [10023, 9650, 9742, 9440, 9930, 9380, 8084, 10939, 10791, 10154, 20332, 8665, 8258, 11103]}, {'label': 'Peru', 'backgroundColor': 'rgba(184,134,11,0.2)', 'data': [7469, 7107, 7475, 6568, 7389, 6964, 6796, 6282, 7042, 7418, 7163, 6676, 7395, 7856]}, {'label': 'Russia', 'backgroundColor': 'rgba(169,169,169,0.2)', 'data': [5734, 5428, 2690, 2475, 5605, 5809, 5754, 5339, 5255, 2895, 2616, 5976, 5750, 6130]}, {'label': 'Indonesia', 'backgroundColor': 'rgba(169,169,169,0.2)', 'data': [2707, 2241, 2552, 3395, 2660, 3036, 2585, 4088, 3576, 2977, 3470, 3501, 3660, 3895]}, {'label': 'Israel', 'backgroundColor': 'rgba(0,100,0,0.2)', 'data': [1786, 1768, 1502, 3572, 2157, 2492, 3110, 3695, 2425, 1620, 2711, 3971, 4212, 3850]}, {'label': 'Iraq', 'backgroundColor': 'rgba(72,61,139,0.2)', 'data': [3579, 3887, 3422, 4427, 4214, 3895, 3859, 4205, 4234, 4052, 4484, 3682, 3231, 3773]}]}, 
			    'options' : {
            legend : {
                display : true,
                position : 'right' 
            }, 
            responsive : true, 
            title: { display: true, text: 'World Covid Status - New Recovered' },
            tooltips: { mode: 'index', intersect: true },
            
		} 
			});
