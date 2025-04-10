import axios from 'axios';

const Api = async () => {
  try {
    const response = await axios.post(
      'https://open-api.kakaopay.com/online/v1/payment/ready',
      {
        cid: 'TC0ONETIME',
        partner_order_id: 'partner_order_id',
        partner_user_id: 'partner_user_id',
        item_name: '초코파이',
        quantity: '1',
        total_amount: '2200',
        vat_amount: '200',
        tax_free_amount: '0',
        approval_url: 'https://developers.kakao.com/success',
        fail_url: 'https://developers.kakao.com/fail',
        cancel_url: 'https://developers.kakao.com/cancel',
      },
      {
        headers: {
          Authorization: 'SECRET_KEY {8341e882052d1213480338c4295d773b}', // 🔐 여기에 본인 시크릿 키 입력
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('✅ 카카오페이 응답:', response.data);

    // 사용자를 카카오 결제창으로 이동
    window.location.href = response.data.next_redirect_pc_url;
  } catch (error) {
    console.error('❌ 카카오페이 요청 실패:', error);
  }
};
export default Api;