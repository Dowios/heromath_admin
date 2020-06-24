var i = 0;
$(document).ready(function(){
	shuffle(d_ans);
	$('#ansrow > .card > .card-body').each(function (index, el) {
		$(this).children('.one-answer').html(d_ans[i][0]);
		$(this).children('.two-answer').html(d_ans[i][1]);
		if(d_ans[i][2] == "n"){
			$(this).children('.one-title').addClass('text-danger');
			$(this).children('.two-title').addClass('text-danger');
			$(this).parent('.card').addClass('stu');
		}else{
			$(this).children('.one-title').addClass('text-danger');
			$(this).children('.two-title').addClass('text-danger');
			$(this).parent('.card').addClass('tr');
		}
		i++;
 	});
	$('.card').addClass('rounded-lg');
	$('.card').addClass('shadow');
	$('.card').addClass('border-0');
});

var d_ans = [
["引起學生興趣","鼓勵學生，誇獎學生","n"],
["我覺得我在引起學生興趣上做的比較好，能夠用故事及我的活動，還有本身氣氛讓學生想要上我的課。","在學生有沒有學會或是有沒有帶走東西上做的比較不足，有時候為了做一堂小孩會有興趣的課，忽略了小孩有沒有在其中學到東西，還是只是玩玩而已。","n"],
["我不是一個聰明的人。所以啊，就在大部分人覺得理所當然的觀念上，我很可以理解為什麼有的人會聽不懂，因為我也曾經卡關過。<br><br>因此，我覺得擁有比較多的耐心以及會從學生的角度思考問題所在是我在換位思考這方面做的比較好的地方。","雖說我覺得我會從學生的角度去思考，不過我不知道怎麼去引起他們學習的興趣，也就是說，我可能會自己講的很開心，可是他們無法體會我的快樂。<br><br>不知道欸，我也還沒經歷過真正的去帶小朋友這部分。我想應該要等體驗過了才會知道自己的問題出在哪。","n"],
["綜合活動的設計","學習單的設計","n"],
["比較擅長去設想到他們覺得有趣的東西。如果今天是個被排擠的學生，我也很能夠同理他的感受，知道那種時候是最需要老師去還他一個公道的。雖然不一定能了解造成這個現象的原因，但至少我能用我的經驗和同理心去幫助他。","對於一些總是在作亂的小朋友，有時候我真的不擅長去找出他作亂的原因，就當下無法換到他的角度去思考。以及和我的個性相反的學生，實在有點難換位思考。還有一些提問的方法，可能有些不擅長去把話語整理好，換成他們比較好聽得懂的話語。","y"],
["我會去思考學生喜歡怎麼樣的課程氛圍，進而去營造對不同班級而言最好的學習環境。","我覺得我在班級經營的技巧上還不夠熟練，有時候只會用同樣的方法對學生，但未必每個班級的學生都是用這些方法，所以在班經技巧上，我覺得我可以多學多用多練習。","y"],
["在表達的時候能用簡單明瞭的話來告訴小朋友，會替他們想有趣的故事、教材給他們上課的動力，在寫教案中考慮周全、能避免小朋友可能會發生的事故並加以制定規則防範。","教學方式更生動活潑帶一點幽默，運用創意讓小朋友在上課中覺得開心、新鮮、有趣，而非做自己的事，上課中能懂得觀察、傾聽，在發生狀況時能立刻做出最適當的回應。","n"],
["覺得在引起學生興趣的部分做得比較好，因為我使用故事包裝課程內容，讓學生覺得像是一邊聽故事、一邊完成任務。","我覺得我在實際教學(試教)的部分需要再加強。我需要再對自己的課程更有信心一點，不要害怕犯錯，也要讓自己在課堂中更放鬆。","n"],
["教學內容設計做的比較好，小朋友會喜歡什麼樣的課。","在教學時，規則、規範的講解要再加強。","n"],
["我做的比較好的部分是我會從學生的角度思考，站在學生的角度希望真的能學到些不一樣的知識。","我覺得我在難度方面需要再加強，常常會不小心用太難的詞，教太難的觀念。","n"],
["我喜歡以詼諧或是會令小朋友大吃一驚的引起動機，多以浮誇的方式呈現整堂課。","「適合小朋友的話」<br><br>是我現在也還在學習的，無論是教學、講解...等，如何表達地簡單又明瞭。","y"],
["我覺得我做的比較好的地方是我希望可以給他們較多元的課程，所以再活動安排上能讓他們探索比較沒有接觸到的領域，講課的方式也比較貼近他們的語言，能引起小朋友更多共鳴。","在設計課程的同時，因為想教的內容對孩子來說是新事物，就必須再多考慮很多面向孩子會出現的疑惑、問題點和突發狀況，希望我可以多預設讓課堂的現實與理想差異降到最低。","y"],
["選擇學生可能會有興趣的課程主題","想更了解學生可能會發生的各種狀況及問題","n"],
["讓學生感到有興趣的課程","別用自己的角度去解釋小朋友不知道的事，也別說只有自己聽得懂的話，要多站在他們的的角度設想，因此表達方式要更口語化。","n"],
["比較了解小朋友喜歡什麼","要多聽小朋友的聲音","y"],
["選學生可能會有興趣、會引起他們好奇的主題。","多給學生回饋讓學生更快融入課堂。","y"],
["我覺得我還有很多可以改善的地方。","可以多站在學生的角度思考（ex.什麼樣的課能讓學生覺得有趣）","n"],
["可能是說故事的部分說得比較好吧，還有PPT的搞笑程度。","引起學生興趣，抓對難度，知道他們在想什麼。","n"],
["1.氣氛 / 2.能夠了解小朋友在想、興趣、喜好。","如何使自己更快的去接近小朋友，能有更多的教學方式，讓想傳達的更容易讓小朋友知道！","y"],
["班級經營，能掌握全班學生的狀況&注意力。","上課時間的掌握，常常引導學生回答太偏，無及時拉回。","y"],
["我覺得我在題目講解的方面還不錯，可以盡可能貼近學生的思考模式，設計出他們可以快速聽懂的題目。","我不太會應對學生跟我垃圾話，我會不知道該聽到什麼樣的程度才要打斷他們，或是直接忽視他們。","n"],
["我覺得我在選擇題材的方面還不錯，盡量選擇學生不會無聊的題目，讓學生可以快樂上課。","不太會應對學生吵架，不知如何幫助他們和解。學生想岔開話題有時會被拉走。","n"],
["我可以把教學步驟拆解得比較仔細，讓學生容易理解。","多用引導討論的方式","y"],
["在設計課程時，我會去想如果我是學生，看到這樣的內容，會有什麼想法？","教室氣氛常常過嗨，有點失控哈哈","y"],
];