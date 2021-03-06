var i = 0;
$(document).ready(function(){
	shuffle(d_ans);
	$('#ansrow > .card > .card-body').each(function (index, el) {
		$(this).children('.one-answer').html(d_ans[i][0]);
		$(this).children('.two-answer').html(d_ans[i][1]);
		if(d_ans[i][2] == "n"){
			$(this).children('.one-title').addClass('text-muted');
			$(this).children('.two-title').addClass('text-muted');
			$(this).parent('.card').addClass('stu');
		}else{
			$(this).children('.one-title').addClass('text-muted');
			$(this).children('.two-title').addClass('text-muted');
			$(this).parent('.card').addClass('tr');
		}
		i++;
 	});
	$('.card').addClass('rounded-lg');
	$('.card').addClass('shadow');
	$('.card').addClass('border-0');
});

var d_ans = [
["學生直接表達自己的想法或許是在上課或是公共場合，老師希望他能看時機說話。","養成他們舉手發言或到老師身旁在講或者是等下課或活動結束後的時候，可以利用講故事講道理，或是直接引導。","n"],
["我們都會偏心，至少我會。我不是故意的，那其實是在無意中發生的。好比說，有的小朋友一直和我對話，我就會繼續跟她對話下去，也因為這樣忽略了其他人。","我希望我能告訴自己甚麼時候該停下來，適時忽略也不適件壞事，況且，我真的必須要去顧到其他人。","n"],
["在表達能力方面吧，他們會害怕或不太願意訴說自己的事情。","就在課堂上設計分享這個環節，讓小孩能表達自己的想法，我們給予肯定和有興趣的感覺，讓小朋友感受到有人願意去傾聽他，所以更願意去表達。","n"],
["自己喜歡擅長的東西比較冷門，不是大家都一定接觸過的，所以如果上這部分的課，沒辦法盡如我喜歡的而須要調整，就算調整後也不一定學生就會喜歡這堂課。<br><br>每個學生都有自己喜歡的事物，但如果他不喜歡這堂我的課，仍然要想辦法讓他上課嗎？他想要的是不上課，而我想要的是讓他上課。","我覺得這些狀況的解決方式都很不一定，會看學生的需求狀況而有不同的結果。如果可以的話，我希望所解決的這個方案是能夠讓學生有長期的受益，而不是短暫的舒適而已。","y"],
["1年級來講好像發生什麼事都不會到太意外，鬧到天空翻過去也沒有不可能。","只要還沒到打架或是太混亂，我都會希望學員可以先行處理，沒有非必要我可能都不會插手，畢竟是學員們學習的機會，也要讓他們知道正式的現場可能會有怎麼樣的情況出現，到時候他們又必須具備什麼樣的技能，這些都是學習的必經之路。","y"],
["不會拿捏自己上課的開放程度，有時會被學生拉走，這是我會遇到的衝突。","能確立一個正確的方向，就算自由也能引導學生往自己設想的方向去想，避免嚴重偏題，確保整體上課流程是順暢的。","n"],
["我覺得在應該做的事與想要做的事情上可能會發生翹翹板的衝突。例如：在課堂上，我應該讓學生學習到知識，同時我也想跟他們一起玩得很開心。但是我應該要分配好學習知識的時間和玩樂的時間，並在應該做的事做完後再開始玩樂。","我期待自己能將遊戲融入課堂之中，讓學生能在玩遊戲時學習知識並玩得開心。","n"],
["我想到的事情是，可能我想要在一堂課裡面想要帶給小朋友的東西太多，但小朋友卻沒辦法吸收那麼多，或者是他們沒興趣。","解決辦法是：如果在前面幾次的課堂發現，小朋友比較喜歡手作的課，或是數學的課 ，或是遊戲，那可能之後的課就適時的調整，可能在課堂上多一點遊戲的課。<br><br>因為在之前出梯的經驗，我在上美勞課的時候，小朋友給的回饋跟回應都比較多，他們也有說他們喜歡做東西。感覺就可以調整其他課程，讓他們學到東西也讓他們做喜歡的事，來取得平衡。","n"],
["我想要教的東西他們不一定能夠深刻的理解，就像是同理心，他們也許可以懂這個背後的意思，但他們不能理解真正發生時到底該怎麼發揮同理心。","在平常上課時就觀察並記錄小朋友之間的互動，在課堂上以他們實際發生過的例子做舉例，讓他們能夠更深刻的體會。","n"],
["我希望教導小朋友心理層面的東西（人生道理之類的），但我不知道他們能不能吸收，或只是在那堂課中體驗而已。","我覺得東東學長提到的體驗教學是可以實行的，因為這種人生課題，不可能靠我一己之力就改變他們的想法，即便他們不懂，但他們能透過這堂課體驗到一些什麼，我覺得就夠了。","y"],
["我在想教案內容與實際上給小朋友體驗時，還蠻常會發生翹翹板衝突的，因為選擇教授對他們來說新穎的課程內容，我們往往不能在課堂中直接的掌握每個孩子的程度和興趣。","透過事前觀察該班孩子們的喜好、性格，在課堂的安排穿插的動靜態活動，調整課程難易度，增加孩子與老師之間的默契與信任。","y"],
["課堂氣氛。他們比較想要在輕鬆的氣氛快樂的學習，但有可能氣氛會營造得太過輕鬆，讓他們放飛自我不學習。","適時收回過於輕鬆的氣氛","n"],
["玩遊戲，像是騎馬打仗。雖然可以增進朋友之間的友誼，但這種遊戲非常激烈、危險性也相對較高。","學校不可能像家庭一樣，對學生實行一對一的看護。而且學生不可能完全服從老師的安排及管理，完全遵守學校的紀律，所以除了口頭上再三叮嚀學生不玩危險的遊戲，不做危險的舉動，我還會播放影片，讓學生知道後果的嚴重性，藉此警惕他們。","n"],
["基本上在師生相處的過程之中，所有事情都會發生如題所說的翹翹板的衝突，畢竟老師心裡所想跟學生心裡所想總是會不一樣。","先往自己身上思考，自己是否有能做得更好的地方，例如學生不願上課是因為課程很無趣，就可以把自己的課程調整成較為吸引學生的課程。若是客觀上的為了小朋友好，就必須堅守自己的原則，並讓小朋友理解他這樣做是不好的。","y"],
["學生來營隊只想玩，不想上課","讓課程內容吸引學生注意力","n"],
["小朋友不想在暑假還要來上課，但還是得上課","讓小朋友不覺得這是上課，從做中學。","n"],
["因不想拖延時間而省略小朋友思考的機會，老師直接告訴孩子答案。","寧可慢下來多點給小朋友的機會，才可以多點親身經驗。","y"],
["希望學生上課可以踴躍舉手發言，回答教師問題，或主動發問，但學生只想聽，不喜歡表達自己的想法。","修正自己的引導語，並且創造出友善的發言環境，讓學生清楚明白教師想要他們回答的是什麼，並且不論他們的答案是什麼，先不論對錯，都予以鼓勵。","y"],
["學生只想玩耍，不想上一些知識性或討論性的課，認為這方面的上課內容很無聊。","把上課內容規劃的好玩一點，讓他們在不知不覺間吸收了上課的相關知識。","n"],
["可能是發生在一些課程中，會想要請同學發言或上台分享，可以培養表達的能力。但有些學生可能較害羞，不太喜歡這樣的上課方式。","可以用鼓勵、引導及循序漸進的方式，可能一開始是先讓他在座位上站起來發言，再到台前發言，最後讓他到台上發言，慢慢培養學生的勇氣。","n"],
["學生想用自己的方式解決跟同學之間的衝突，但他的方式會讓別人受傷、難過，老師要介入處理卻被拒絕。","跟他討論解決的方式會有哪些優缺點，會造成怎樣的後果，並用同理心的方式讓他不堅持自己原本的處理方法。","y"],
["學生只想快樂學習（不用寫作業、學習單……）","把內容作包裝，讓學生感興趣，自己想寫","y"]
];