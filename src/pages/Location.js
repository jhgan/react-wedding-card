import React, {useRef, useEffect} from 'react'
import naverMapIcon from '../images/naver.webp';
import kakaoMapIcon from '../images/kakao.png';

function Location() {
  const mapRef = useRef(null);
  const lat = 37.565045; // 위도
  const lng = 126.995636; // 경도

  useEffect(() => {
    const { naver } = window;
    if (mapRef.current && naver) {
      const location = new naver.maps.LatLng(lat, lng);
      const map = new naver.maps.Map(mapRef.current, {
        center: location,
        zoom: 16, // 지도 확대 정도
      });
      new naver.maps.Marker({
        position: location,
        map,
      });
    }
  }, []);

  const gotoNavermap = () => {
    window.location.href = 'https://naver.me/5z52xffj'
  }

  const gotoKakaomap = () => {
    window.location.href = ''
  }
  

  return (
    <div className='container'>
    <div className='title'>오시는 길</div>
    <div className='location__details'>
      <div>상록아트홀 그랜드볼룸홀</div>
      <div>서울 중구 마른내로 71 호텔피제이</div>
    </div>
    <div ref={mapRef} className='location__map'></div>
    <div className='location__map-icon-box'>
        <div className='location__map-item' onClick={gotoNavermap}>
          <img src={naverMapIcon} className='location__map-icon' alt="naverMap"/>
          <span>네이버지도</span>
        </div>
        <div className='location__map-item' onClick={gotoKakaomap}>
          <img src={kakaoMapIcon} className='location__map-icon' alt='kakaoMap'/>
          <span>카카오지도</span>
        </div>
    </div>
   <div className='location__info'>
    <div>
      을지로4가역(2,5호선) 10번출구 도보 5분 소요<br/>
      충무로역(3,4호선) 8번출구 도보 5분 소요<br/><br/>
      *주말 예식 1시간 전부터 셔틀버스 운영<br/>
      을지로 4가 9번출구로 나온 후 GS25(편의점) 골목에서 탑승<br/>
      충무로역 8번출구 탑승<br/>
      (*운영시간 및 간격은 상황에 따라 변동 될 수 있습니다.)<br/>
    </div>
   </div>
</div>
  )
}


export default Location
