//basically a csv stored directly into a variable with $ instead of linebreaks

var mealRawData = "person;food;date;time;place;type$Danny;1;02.05.2016;08:50;Zuhause;Frühstück$Danny;2;02.05.2016;08:50;Zuhause;Frühstück$Danny;3;02.05.2016;12:40;Zuhause;Mittag$Danny;4;02.05.2016;15:15;Zuhause;Snack$Danny;5;02.05.2016;19:40;Zuhause;Abendessen$Danny;6;02.05.2016;19:40;Zuhause;Abendessen$Danny;7;02.05.2016;21:00;Zuhause;Snack$Danny;8;03.05.2016;08:20;Zuhause;Frühstück$Danny;1;03.05.2016;08:20;Zuhause;Frühstück$Danny;9;03.05.2016;08:20;Zuhause;Frühstück$Danny;10;03.05.2016;11:15;Unterwegs;Mittag$Danny;11;03.05.2016;19:05;Zuhause;Abendessen$Danny;12;03.05.2016;19:05;Zuhause;Abendessen$Danny;2;03.05.2016;19:05;Zuhause;Abendessen$Danny;17;03.05.2016;20:30;Zuhause;Snack$Danny;13;03.05.2016;20:30;Zuhause;Snack$Lisa;8;02.05.2016;10:20;Zuhause;Frühstück$Lisa;34;02.05.2016;10:20;Zuhause;Snack$Lisa;15;02.05.2016;13:30;Unterwegs;Mittag$Lisa;16;02.05.2016;16:30;Unterwegs;Snack$Lisa;11;02.05.2016;18:30;Zuhause;Abendessen$Lisa;17;02.05.2016;23:00;Zuhause;Snack$Lisa;8;03.05.2016;11:00;Zuhause;Frühstück$Lisa;18;03.05.2016;14:00;Zuhause;Mittag$Lisa;19;03.05.2016;18:00;Zuhause;Abendessen$Lisa;16;03.05.2016;23:00;Zuhause;Snack$Lisa;17;03.05.2016;23:00;Zuhause;Snack$David;9;02.05.2016;07:50;Zuhause;Frühstück$David;20;02.05.2016;19:00;Zuhause;Abendessen$David;21;02.05.2016;23:30;Zuhause;Snack$David;22;03.05.2016;07:50;Zuhause;Frühstück$David;23;03.05.2016;09:00;Unterwegs;Snack$David;17;03.05.2016;17:30;Unterwegs;Snack$David;21;03.05.2016;22:00;Zuhause;Abendessen$Till;2;02.05.2016;08:35;Zuhause;Frühstück$Till;41;02.05.2016;08:35;Zuhause;Frühstück$Till;25;02.05.2016;12:10;Unterwegs;Mittag$Till;26;02.05.2016;12:10;Unterwegs;Mittag$Till;27;02.05.2016;17:00;Unterwegs;Abendessen$Till;2;02.05.2016;22:30;Zuhause;Snack$Till;8;02.05.2016;22:30;Zuhause;Snack$Till;41;02.05.2016;22:30;Zuhause;Snack$Till;28;02.05.2016;22:30;Zuhause;Snack$Till;29;03.05.2016;08:00;Zuhause;Frühstück$Till;30;03.05.2016;12:10;Unterwegs;Mittag$Till;31;03.05.2016;15:00;Unterwegs;Snack$Till;32;03.05.2016;16:10;Unterwegs;Snack$Till;33;03.05.2016;17:10;Zuhause;Abendessen$Danny;35;04.05.2016;09:13;Zuhause;Frühstück$Danny;36;04.05.2016;09:13;Zuhause;Frühstück$Danny;37;04.05.2016;12:05;Zuhause;Mittag$Danny;38;04.05.2016;12:05;Zuhause;Mittag$Danny;17;04.05.2016;13:20;Zuhause;Snack$Danny;9;04.05.2016;14:30;Zuhause;Snack$Danny;37;04.05.2016;20:40;Zuhause;Abendessen$Danny;13;04.05.2016;21:30;Zuhause;Snack$Lisa;4;04.05.2016;09:20;Unterwegs;Frühstück$Lisa;39;04.05.2016;12:00;Unterwegs;Mittag$Lisa;17;04.05.2016;14:50;Unterwegs;Snack$Lisa;18;04.05.2016;19:30;Zuhause;Abendessen$David;23;04.05.2016;09:30;Unterwegs;Snack$David;40;04.05.2016;19:00;Zuhause;Abendessen$Till;28;04.05.2016;08:20;Zuhause;Frühstück $Till;41;04.05.2016;08:20;Zuhause;Frühstück $Till;42;04.05.2016;12:30;Zuhause;Mittag $Till;43;04.05.2016;17:00;Zuhause;Abendessen$Danny;28;05.05.2016;06:10;Zuhause;Snack$Danny;2;05.05.2016;08:15;Zuhause;Frühstück $Danny;1;05.05.2016;08:15;Zuhause;Frühstück $Danny;44;05.05.2016;06:10;Zuhause;Snack$Danny;37;05.05.2016;12:10;Zuhause;Mittag$Danny;4;05.05.2016;15:20;Zuhause;Snack$Danny;45;05.05.2016;19:00;Zuhause;Abendessen$Danny;34;05.05.2016;19:00;Zuhause;Abendessen$Danny;13;05.05.2016;21:20;Zuhause;Snack$Lisa;46;05.05.2016;11:00;Zuhause;Frühstück$Lisa;23;05.05.2016;13:30;Unterwegs;Mittag$Lisa;47;05.05.2016;19:00;Unterwegs;Abendessen$David;8;05.05.2016;12:30;Zuhause;Frühstück$David;48;05.05.2016;15:00;Zuhause;Mittag$David;49;05.05.2016;16:00;Zuhause;Snack$David;50;05.05.2016;19:30;Zuhause;Abendessen$Till;41;05.05.2016;07:10;Zuhause;Frühstück$Till;43;05.05.2016;12:30;Unterwegs;Mittag$Till;43;05.05.2016;16:15;Unterwegs;Snack$Till;51;05.05.2016;20:40;Unterwegs;Abendessen";