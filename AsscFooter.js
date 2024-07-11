jQuery(function($){
	let footerTag = '';
	footerTag = `
	<div class="footer">
		footer_innerHTML += '<div class="area">
		footer_innerHTML += '	<div class="policy">
		footer_innerHTML += '		<ul>
		footer_innerHTML += '			<li><a href="https://www.akplaza.com/etc/company/ideology" target="_blank" title="새창열림">애경유통그룹소개</a></li>
		footer_innerHTML += '			<li><a href="https://www.akmall.com/info/UseStiplt.do" onclick="goUrlPath(this.href, \'\', \'K1_01\', \'0\'); return false;" target="_blank" title="새창열림">이용약관</a></li>
		footer_innerHTML += '			<li><a href="https://www.akmall.com/info/PartnerShip.do" onclick="goUrlPath(this.href, \'\', \'K1_02\', \'0\'); return false;" target="_blank" title="새창열림">제휴파트너쉽</a></li>
		footer_innerHTML += '			<li><a href="https://www.akmall.com/info/LaunchComp.do" onclick="goUrlPath(this.href, \'\', \'K1_03\', \'0\'); return false;" target="_blank" title="새창열림">입점문의</a></li>
		footer_innerHTML += '			<li><a href="https://www.akmall.com/info/PrsnlTreat.do" onclick="goUrlPath(this.href, \'\', \'K1_04\', \'0\'); return false;" target="_blank" title="새창열림" class="color-pink">개인정보처리방침</a></li>
		footer_innerHTML += '			<li><a href="https://www.akmall.com/info/PrsnlTreatYouth.do" onclick="goUrlPath(this.href, \'\', \'K1_04\', \'0\'); return false;" target="_blank" title="새창열림">청소년보호정책</a></li>
		footer_innerHTML += '			<li><a href="https://www.akmall.com/info/PrsnlTreatTen.do" onclick="goUrlPath(this.href, \'\', \'K1_05\', \'0\'); return false;" target="_blank" title="새창열림">개인정보보호10계명</a></li>
		footer_innerHTML += '			<li><a href="https://www.akmall.com/info/pMailReject.do" target="_blank" onclick="openWindowPopup(addUrlPath(this.href, \'\', \'K1_06\', \'0\'), \'pMailReject\', 552, 371, \'center\'); return false;" target="_blank" title="새창열림">이메일무단수집거부</a></li>
		footer_innerHTML += '		</ul>
		footer_innerHTML += '	</div>
		</div>
		<div class="info">
			<div class="footer_logo">
				<i class="ico ico_footer_logo"><em>AK MALL</em></i>
			</div>
			<div>
				<p class="blind">고객센터 정보</p>
				<dl>
					<dt>고객센터</dt>
					<dd>상담가능시간 : 09:00 ~ 18:00 (토, 공휴일 휴무)</dd>
					<dd>Tel : <b>1588-2055</b></dd>
					<dd>Fax : 032-321-6201  </dd>
					<dd>Mail : akfriendly@interparkshop.com</dd>
				</dl>
				<button type="button" onclick="location.href=\'https://www.akmall.com/customer/OneToOneQna.do\'">1:1 고객상담</button>
				<button type="button" onclick="location.href=\'https://www.akmall.com/customer/FaqList.do\'">문의 전 클릭</button>
			</div>
			<div>
				<dl>
					<dt>주식회사 인터파크커머스</dt>
					<dd>대표이사 : 김동식</dd>
					<dd>사업자등록번호 : 422-81-03185</dd>
					<dd>통신판매업신고 : 2024-서울강남-02073</dd>
					<dd>서울특별시 강남구 영동대로 502 (삼성동) </dd>
				</dl>
				<button type="button" onclick="window.open(\'http://www.ftc.go.kr/bizCommPop.do?wrkr_no=4228103185\')">사업자정보확인</button>
			</div>
			<div>
				<dl>
					<dt>소비자피해보상보험</dt>
					<dd>
						고객님은 안전거래를 위해 현금 등으로 결제 시
						저희 쇼핑몰에서 가입한 구매 안전서비스, 소비자피해보상보험
						서비스를 이용하실 수 있습니다. <br/>
						보상대상 : 미배송, 반품/환불거부, 쇼핑몰부도
					</dd>
				</dl>
				<button type="button" onclick="openWindowPopup(\'https://www.akmall.com/resource/templates/popup/purchaseSafety_confirmUse_commerce.html\', \'소비자피해보상보험\', \'566\', \'800\', true, false)">서비스 가입사실 확인</button>
			</div>
		</div>
	</div>`;
	var footer_innerHTML = footerTag;
	$('body').append(footer_innerHTML);
});
