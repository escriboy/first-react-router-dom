import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  NavLink,
  Route,
  Switch,
  useParams,
} from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

function Home() {
  return (
    <div className="sectionDivMain">
      <div className="listDivMain">
        <p className="listNumb">
          <em>#01. Lo-fi</em>
        </p>
        <a>
          <img
            className="listImg"
            src="images/index_01.jpg"
            alt="index_01.jpg"
          />
        </a>
        <a className="listTitle"> 🎹 감각적인 Lo-fi 음악을 좋아한다면?</a>
        <p className="listDesc">
          해당 장르의 플레이리스트를 구경하고 싶다면 아래 버튼을 클릭해주세요.
        </p>
        <NavLink to="/Lofi">
          <button type="button" className="fill">
            Click Me!
          </button>
        </NavLink>
      </div>
      <div className="listDivMain">
        <p className="listNumb">
          <em>#02. Pop</em>
        </p>
        <a>
          <img
            className="listImg"
            src="images/index_02.jpg"
            alt="index_02.jpg"
          />
        </a>
        <a className="listTitle"> 🎹 트렌디한 팝송을 즐겨 듣는다면?</a>
        <p className="listDesc">
          해당 장르의 플레이리스트를 구경하고 싶다면 아래 버튼을 클릭해주세요.
        </p>
        <NavLink to="/Pop">
          <button type="button" className="fill">
            Click Me!
          </button>
        </NavLink>
      </div>
      <div className="listDivMain">
        <p className="listNumb">
          <em>#03. Piano</em>
        </p>
        <a>
          <img
            className="listImg"
            src="images/index_03.jpg"
            alt="index_03.jpg"
          />
        </a>
        <a className="listTitle">
          {" "}
          🎹 잔잔한 피아노를 들어야 집중이 잘 된다면?
        </a>
        <p className="listDesc">
          해당 장르의 플레이리스트를 구경하고 싶다면 아래 버튼을 클릭해주세요.
        </p>
        <NavLink to="/Piano">
          <button type="button" className="fill">
            Click Me!
          </button>
        </NavLink>
      </div>
      <div className="listDivMain">
        <p className="listNumb">
          <em>#04. Jazz</em>
        </p>
        <a>
          <img
            className="listImg"
            src="images/index_04.jpg"
            alt="index_04.jpg"
          />
        </a>
        <a className="listTitle"> 🎹 재즈 음악을 들어야 힘이 난다면?</a>
        <p className="listDesc">
          해당 장르의 플레이리스트를 구경하고 싶다면 아래 버튼을 클릭해주세요.
        </p>
        <NavLink to="/Jazz">
          <button type="button" className="fill">
            Click Me!
          </button>
        </NavLink>
      </div>
    </div>
  );
}

function Lofi() {
  return (
    <div class="sectionDiv">
      <div class="listDiv">
        <p class="listNumb">
          <em>PLAYLIST_01</em>
        </p>
        <a href="https://www.youtube.com/watch?v=cbuZfY2S2UQ&t" target="_blank">
          <img
            class="listImg"
            src="images/sum_img_01.jpeg"
            alt="sum_img_01.jpeg"
          />
        </a>
        <a class="listTitle">
          🎹 코딩할때 듣기 좋은 노래•lofi type beat•3 hours
        </a>
        <p class="listDesc">
          이미지를 클릭하면 플레이리스트로 이동합니다. <br />더 많은 Lo-fi
          플레이리스트를 감상하고 싶다면 아래 버튼을 클릭해주세요.
        </p>
        <NavLink to="/LofiDetail">
          <button type="button" class="fill">
            See More
          </button>
        </NavLink>
      </div>
      <div class="listDiv">
        <p class="listNumb">
          <em>PLAYLIST_02</em>
        </p>
        <a href="https://www.youtube.com/watch?v=4LIt_ICJyjk" target="_blank">
          <img
            class="listImg"
            src="images/sum_img_02.jpeg"
            alt="sum_img_02.jpeg"
          />
        </a>
        <a class="listTitle">🎹 코딩 / 과제 할 때 집중 해서 듣기 좋은 음악</a>
        <p class="listDesc">
          이미지를 클릭하면 플레이리스트로 이동합니다. <br />더 많은 Lo-fi
          플레이리스트를 감상하고 싶다면 아래 버튼을 클릭해주세요.
        </p>
        <NavLink to="/LofiDetail">
          <button type="button" class="fill">
            See More
          </button>
        </NavLink>
      </div>
      <div class="listDiv">
        <p class="listNumb">
          <em>PLAYLIST_03</em>
        </p>
        <a href="https://www.youtube.com/watch?v=p6xqKJqsQWs" target="_blank">
          <img
            class="listImg"
            src="images/sum_img_03.jpeg"
            alt="sum_img_03.jpeg"
          />
        </a>
        <a class="listTitle">
          🎹 매일 컴퓨터에 집중할 수 있도록 도와주는 음악 | 3 hour lofi hiphop
          mix
        </a>
        <p class="listDesc">
          이미지를 클릭하면 플레이리스트로 이동합니다. <br />더 많은 Lo-fi
          플레이리스트를 감상하고 싶다면 아래 버튼을 클릭해주세요.
        </p>
        <NavLink to="/LofiDetail">
          <button type="button" class="fill">
            See More
          </button>
        </NavLink>
      </div>
      <div class="listDiv">
        <p class="listNumb">
          <em>PLAYLIST_04</em>
        </p>
        <a href="https://www.youtube.com/watch?v=-3CDcU-eco8" target="_blank">
          <img
            class="listImg"
            src="images/sum_img_04.jpg"
            alt="sum_img_04.jpg"
          />
        </a>
        <a class="listTitle">
          🎹 코딩 / 과제 할 때 집중 해서 듣기 좋은 음악 • 3 hour playlist
        </a>
        <p class="listDesc">
          이미지를 클릭하면 플레이리스트로 이동합니다. <br />더 많은 Lo-fi
          플레이리스트를 감상하고 싶다면 아래 버튼을 클릭해주세요.
        </p>
        <NavLink to="/LofiDetail">
          <button type="button" class="fill">
            See More
          </button>
        </NavLink>
      </div>
    </div>
  );
}

function Pop() {
  return (
    <div class="sectionDiv">
      <div class="listDiv">
        <p class="listNumb">
          <em>PLAYLIST_01</em>
        </p>
        <a href="https://www.youtube.com/watch?v=W_MUcyXz3r4" target="_blank">
          <img
            class="listImg"
            src="images/sum_img_09.jpg"
            alt="sum_img_05.jpg"
          />
        </a>
        <a class="listTitle">
          🎹 들으면 기분 좋아지는 디즈니/픽사 ost 모음 🏰✨ [00:42:31]
        </a>
        <p class="listDesc">
          이미지를 클릭하면 플레이리스트로 이동합니다. <br />더 많은 Pop Songs
          플레이리스트를 감상하고 싶다면 아래 버튼을 클릭해주세요.
        </p>
        <NavLink to="/PopDetail">
          <button type="button" class="fill">
            See More
          </button>
        </NavLink>
      </div>
      <div class="listDiv">
        <p class="listNumb">
          <em>PLAYLIST_02</em>
        </p>
        <a
          href="https://www.youtube.com/watch?v=xBc71fwMxEU&t=3s"
          target="_blank"
        >
          <img
            class="listImg"
            src="images/sum_img_10.jpg"
            alt="sum_img_10.jpg"
          />
        </a>
        <a class="listTitle">
          🎹 아직 시험기간인 사람?! 🙌 | 과제 공부 할 때 듣기 좋은 팝송
          [02:03:27]
        </a>
        <p class="listDesc">
          이미지를 클릭하면 플레이리스트로 이동합니다. <br />더 많은 Pop Songs
          플레이리스트를 감상하고 싶다면 아래 버튼을 클릭해주세요.
        </p>
        <NavLink to="/PopDetail">
          <button type="button" class="fill">
            See More
          </button>
        </NavLink>
      </div>
      <div class="listDiv">
        <p class="listNumb">
          <em>PLAYLIST_03</em>
        </p>
        <a href="https://www.youtube.com/watch?v=cGhGtKnKZbY" target="_blank">
          <img
            class="listImg"
            src="images/sum_img_11.jpg"
            alt="sum_img_11.jpg"
          />
        </a>
        <a class="listTitle">
          🎹 세련된 카페 안, 나 그리고 커피 & 음악 ☕🍮 [00:50:34]
        </a>
        <p class="listDesc">
          이미지를 클릭하면 플레이리스트로 이동합니다. <br />더 많은 Pop Songs
          플레이리스트를 감상하고 싶다면 아래 버튼을 클릭해주세요.
        </p>
        <NavLink to="/PopDetail">
          <button type="button" class="fill">
            See More
          </button>
        </NavLink>
      </div>
      <div class="listDiv">
        <p class="listNumb">
          <em>PLAYLIST_04</em>
        </p>
        <a href="https://www.youtube.com/watch?v=Og67WotoXj4" target="_blank">
          <img
            class="listImg"
            src="images/sum_img_12.jpg"
            alt="sum_img_12.jpg"
          />
        </a>
        <a class="listTitle">
          🎹 집중해야 되는데 팝송은 듣고 싶을 때 [00:59:23]
        </a>
        <p class="listDesc">
          이미지를 클릭하면 플레이리스트로 이동합니다. <br />더 많은 Pop Songs
          플레이리스트를 감상하고 싶다면 아래 버튼을 클릭해주세요.
        </p>
        <NavLink to="/PopDetail">
          <button type="button" class="fill">
            See More
          </button>
        </NavLink>
      </div>
    </div>
  );
}

function Piano() {
  return (
    <div class="sectionDiv">
      <div class="listDiv">
        <p class="listNumb">
          <em>PLAYLIST_01</em>
        </p>
        <a href="https://www.youtube.com/watch?v=DpFGT8Cj8-o" target="_blank">
          <img
            class="listImg"
            src="images/sum_img_05.jpg"
            alt="sum_img_05.jpg"
          />
        </a>
        <a class="listTitle">
          🎹 스튜디오 지브리 영화 OST 피아노 커버 모음✨ [08:12:40]
        </a>
        <p class="listDesc">
          이미지를 클릭하면 플레이리스트로 이동합니다. <br />더 많은 Piano
          플레이리스트를 감상하고 싶다면 아래 버튼을 클릭해주세요.
        </p>
        <NavLink to="/PianoDetail">
          <button type="button" class="fill">
            See More
          </button>
        </NavLink>
      </div>
      <div class="listDiv">
        <p class="listNumb">
          <em>PLAYLIST_02</em>
        </p>
        <a href="https://www.youtube.com/watch?v=6HzqDQmYlfY" target="_blank">
          <img
            class="listImg"
            src="images/sum_img_06.jpg"
            alt="sum_img_06.jpg"
          />
        </a>
        <a class="listTitle">🎹 내가 사랑한 이루마의 음악 [00:54:50]</a>
        <p class="listDesc">
          이미지를 클릭하면 플레이리스트로 이동합니다. <br />더 많은 Piano
          플레이리스트를 감상하고 싶다면 아래 버튼을 클릭해주세요.
        </p>
        <NavLink to="/PianoDetail">
          <button type="button" class="fill">
            See More
          </button>
        </NavLink>
      </div>
      <div class="listDiv">
        <p class="listNumb">
          <em>PLAYLIST_03</em>
        </p>
        <a href="https://www.youtube.com/watch?v=ivOm8atZK34" target="_blank">
          <img
            class="listImg"
            src="images/sum_img_07.jpg"
            alt="sum_img_07.jpg"
          />
        </a>
        <a class="listTitle">
          🎹 공부할 때 듣기 좋은 애니메이션 OST 피아노 커버 모음 [01:47:42]
        </a>
        <p class="listDesc">
          이미지를 클릭하면 플레이리스트로 이동합니다. <br />더 많은 Piano
          플레이리스트를 감상하고 싶다면 아래 버튼을 클릭해주세요.
        </p>
        <NavLink to="/PianoDetail">
          <button type="button" class="fill">
            See More
          </button>
        </NavLink>
      </div>
      <div class="listDiv">
        <p class="listNumb">
          <em>PLAYLIST_04</em>
        </p>
        <a href="https://www.youtube.com/watch?v=RhNJCS3hX6c" target="_blank">
          <img
            class="listImg"
            src="images/sum_img_08.jpg"
            alt="sum_img_08.jpg"
          />
        </a>
        <a class="listTitle">🎹 내가 사랑한 히사이시 조의 음악 [00:35:38]</a>
        <p class="listDesc">
          이미지를 클릭하면 플레이리스트로 이동합니다. <br />더 많은 Piano
          플레이리스트를 감상하고 싶다면 아래 버튼을 클릭해주세요.
        </p>
        <NavLink to="/PianoDetail">
          <button type="button" class="fill">
            See More
          </button>
        </NavLink>
      </div>
    </div>
  );
}

function Jazz() {
  return (
    <div className="sectionDiv">
      <div className="listDiv">
        <p className="listNumb">
          <em>PLAYLIST_01</em>
        </p>
        <a href="https://www.youtube.com/watch?v=PENa-geh_XA" target="_blank">
          <img
            className="listImg"
            src="images/sum_img_13.jpg"
            alt="sum_img_13.jpg"
          />
        </a>
        <a className="listTitle">
          🎹 재알못도 무조건 아는 유명한 재즈곡 모음 [00:59:01]
        </a>
        <p className="listDesc">
          이미지를 클릭하면 플레이리스트로 이동합니다. <br />더 많은 Jazz
          플레이리스트를 감상하고 싶다면 아래 버튼을 클릭해주세요.
        </p>
        <NavLink to="/JazzDetail">
          <button type="button" className="fill">
            See More
          </button>
        </NavLink>
      </div>
      <div className="listDiv">
        <p className="listNumb">
          <em>PLAYLIST_02</em>
        </p>
        <a
          href="https://www.youtube.com/watch?v=xBc71fwMxEU&t=3s"
          target="_blank"
        >
          <img
            className="listImg"
            src="images/sum_img_14.jpg"
            alt="sum_img_14.jpg"
          />
        </a>
        <a className="listTitle">🎹 밤이 내리고 재즈가 흐르면 [01:00:31]</a>
        <p className="listDesc">
          이미지를 클릭하면 플레이리스트로 이동합니다. <br />더 많은 Jazz
          플레이리스트를 감상하고 싶다면 아래 버튼을 클릭해주세요.
        </p>
        <NavLink to="/JazzDetail">
          <button type="button" className="fill">
            See More
          </button>
        </NavLink>
      </div>
      <div className="listDiv">
        <p className="listNumb">
          <em>PLAYLIST_03</em>
        </p>
        <a href="https://www.youtube.com/watch?v=uj-fZfscY9Y" target="_blank">
          <img
            className="listImg"
            src="images/sum_img_15.jpg"
            alt="sum_img_15.jpg"
          />
        </a>
        <a className="listTitle">
          🎹 감미로운 뉴욕감성 보사노바 재즈 Playlist [06:02:53]
        </a>
        <p className="listDesc">
          이미지를 클릭하면 플레이리스트로 이동합니다. <br />더 많은 Jazz
          플레이리스트를 감상하고 싶다면 아래 버튼을 클릭해주세요.
        </p>
        <NavLink to="/JazzDetail">
          <button type="button" className="fill">
            See More
          </button>
        </NavLink>
      </div>
      <div className="listDiv">
        <p className="listNumb">
          <em>PLAYLIST_04</em>
        </p>
        <a href="https://www.youtube.com/watch?v=OPS19XCeGm0" target="_blank">
          <img
            className="listImg"
            src="images/sum_img_16.jpg"
            alt="sum_img_16.jpg"
          />
        </a>
        <a className="listTitle">🎹 집에서 듣기 좋은 올드 재즈팝 [01:01:36]</a>
        <p className="listDesc">
          이미지를 클릭하면 플레이리스트로 이동합니다. <br />더 많은 Jazz
          플레이리스트를 감상하고 싶다면 아래 버튼을 클릭해주세요.
        </p>
        <NavLink to="/JazzDetail">
          <button type="button" className="fill">
            See More
          </button>
        </NavLink>
      </div>
    </div>
  );
}

function LofiDetail() {
  return (
    <div class="sectionDivDetail">
      <div class="listDivDetail">
        <div class="detailBanner">
          <p class="listNumbDetail">
            <em>Lo-fi Playlists</em>
          </p>
          <a
            href="https://www.youtube.com/watch?v=cbuZfY2S2UQ&t"
            target="_blank"
          >
            <img
              class="listImgDetail"
              src="images/det_img_01.jpeg"
              alt="det_img_01.jpeg"
            />
          </a>
          <a class="listTitle">
            🎹 lofi hip hop radio - beats to relax/study to [24:00:00]
          </a>
          <p class="listDesc">
            이미지를 클릭하면 해당 플레이리스트로 이동합니다.
          </p>
        </div>
        <div class="detailDiv">
          <a href="https://www.youtube.com/watch?v=DqVqZ6ddvQk" target="_blank">
            <img
              class="listImgDetail"
              src="images/det_img_02.jpg"
              alt="det_img_02.jpg"
            />
          </a>
          <a class="listTitle">
            🎹 효율적으로 일하기 좋은 음악 lofi hip hop mix [04:13:54]
          </a>
          <p class="listDesc">
            이미지를 클릭하면 해당 플레이리스트로 이동합니다.
          </p>
        </div>
        <div class="detailDiv">
          <a href="https://www.youtube.com/watch?v=1oahTaVIQvk" target="_blank">
            <img
              class="listImgDetail"
              src="images/det_img_03.jpg"
              alt="det_img_03.jpg"
            />
          </a>
          <a class="listTitle">
            🎹 Floating City 🍃 Chill Lofi Beats [02:00:13]
          </a>
          <p class="listDesc">
            이미지를 클릭하면 해당 플레이리스트로 이동합니다.
          </p>
        </div>
        <div class="detailDiv">
          <a href="https://www.youtube.com/watch?v=HT2rbv_-MOg" target="_blank">
            <img
              class="listImgDetail"
              src="images/det_img_04.jpg"
              alt="det_img_04.jpg"
            />
          </a>
          <a class="listTitle">
            🎹 코딩 / 과제 할 때 집중 해서 듣기 좋은 음악 [02:47:43]
          </a>
          <p class="listDesc">
            이미지를 클릭하면 해당 플레이리스트로 이동합니다.
          </p>
        </div>
      </div>
    </div>
  );
}

function PopDetail() {
  return (
    <div class="sectionDivDetail">
      <div class="listDivDetail">
        <div class="detailBanner">
          <p class="listNumbDetail">
            <em>Pop Song Playlists</em>
          </p>
          <a href="https://www.youtube.com/watch?v=S0Xv9n9nJ60" target="_blank">
            <img
              class="listImgDetail"
              src="images/det_img_05.jpg"
              alt="det_img_05.jpg"
            />
          </a>
          <a class="listTitle">
            🎹 𝟐𝟎𝟐𝟐 🪁 인생 팝송 발견! 올해 가장 인기가 많았던 신나는 팝송
            [01:06:29]
          </a>
          <p class="listDesc">
            이미지를 클릭하면 해당 플레이리스트로 이동합니다.
          </p>
        </div>
        <div class="detailDiv">
          <a href="https://www.youtube.com/watch?v=3owcmKI642c" target="_blank">
            <img
              class="listImgDetail"
              src="images/det_img_06.jpg"
              alt="det_img_06.jpg"
            />
          </a>
          <a class="listTitle">
            🎹 무기력한 아침, 리듬 타며 여름나기 🌿 [00:44:22]
          </a>
          <p class="listDesc">
            이미지를 클릭하면 해당 플레이리스트로 이동합니다.
          </p>
        </div>
        <div class="detailDiv">
          <a href="https://www.youtube.com/watch?v=KmB1MJO81wQ" target="_blank">
            <img
              class="listImgDetail"
              src="images/det_img_07.jpg"
              alt="det_img_07.jpg"
            />
          </a>
          <a class="listTitle">
            🎹 혼자 있고 싶을 때 듣는 감성음악, 조용한팝송 [24:00:00]
          </a>
          <p class="listDesc">
            이미지를 클릭하면 해당 플레이리스트로 이동합니다.
          </p>
        </div>
        <div class="detailDiv">
          <a href="https://www.youtube.com/watch?v=-naDBIfAq3o" target="_blank">
            <img
              class="listImgDetail"
              src="images/det_img_08.jpg"
              alt="det_img_08.jpg"
            />
          </a>
          <a class="listTitle">
            🎹 과제할때 들으면 교수님께 A+ 받는 팝송 [00:25:34]
          </a>
          <p class="listDesc">
            이미지를 클릭하면 해당 플레이리스트로 이동합니다.
          </p>
        </div>
      </div>
    </div>
  );
}

function PianoDetail() {
  return (
    <div class="sectionDivDetail">
      <div class="listDivDetail">
        <div class="detailBanner">
          <p class="listNumbDetail">
            <em>Piano Playlists</em>
          </p>
          <a href="https://www.youtube.com/watch?v=d_UJzKQRnvo" target="_blank">
            <img
              class="listImgDetail"
              src="images/det_img_09.jpg"
              alt="det_img_09.jpg"
            />
          </a>
          <a class="listTitle">
            🎹 외국영화 OST 피아노 커버 모음 🎬 [05:59:50]
          </a>
          <p class="listDesc">
            이미지를 클릭하면 해당 플레이리스트로 이동합니다.
          </p>
        </div>
        <div class="detailDiv">
          <a href="https://www.youtube.com/watch?v=WGwP4-zYH5M" target="_blank">
            <img
              class="listImgDetail"
              src="images/det_img_10.jpg"
              alt="det_img_10.jpg"
            />
          </a>
          <a class="listTitle">
            🎹 미술관에서 들려오는 고급진 조성진의 클래식 [01:11:36]
          </a>
          <p class="listDesc">
            이미지를 클릭하면 해당 플레이리스트로 이동합니다.
          </p>
        </div>
        <div class="detailDiv">
          <a href="https://www.youtube.com/watch?v=zkwpF150kQ4" target="_blank">
            <img
              class="listImgDetail"
              src="images/det_img_11.jpg"
              alt="det_img_11.jpg"
            />
          </a>
          <a class="listTitle">
            🎹 2022년 가요 피아노 모음 (2022 KPOP PIANO COLLECTION) [02:02:19]
          </a>
          <p class="listDesc">
            이미지를 클릭하면 해당 플레이리스트로 이동합니다.
          </p>
        </div>
        <div class="detailDiv">
          <a href="https://www.youtube.com/watch?v=oKj5wOJejsk" target="_blank">
            <img
              class="listImgDetail"
              src="images/det_img_12.jpg"
              alt="det_img_12.jpg"
            />
          </a>
          <a class="listTitle">
            🎹 픽사 OST 피아노 커버 모음 (토이스토리, 인사이드 아웃, 코코 등)
            [08:29:11]
          </a>
          <p class="listDesc">
            이미지를 클릭하면 해당 플레이리스트로 이동합니다.
          </p>
        </div>
      </div>
    </div>
  );
}

function JazzDetail() {
  return (
    <div class="sectionDivDetail">
      <div class="listDivDetail">
        <div class="detailBanner">
          <p class="listNumbDetail">
            <em>Jazz Playlists</em>
          </p>
          <a href="https://www.youtube.com/watch?v=dQqVlUda25c" target="_blank">
            <img
              class="listImgDetail"
              src="images/det_img_13.jpg"
              alt="det_img_13.jpg"
            />
          </a>
          <a class="listTitle">
            🎹 비 오는 날 미술관에서, 재즈 Playlist [00:43:41]
          </a>
          <p class="listDesc">
            이미지를 클릭하면 해당 플레이리스트로 이동합니다.
          </p>
        </div>
        <div class="detailDiv">
          <a href="https://www.youtube.com/watch?v=Dx5qFachd3A" target="_blank">
            <img
              class="listImgDetail"
              src="images/det_img_14.jpg"
              alt="det_img_14.jpg"
            />
          </a>
          <a class="listTitle">
            🎹 Relaxing Jazz Piano Radio - Slow Jazz Music [24:00:00]
          </a>
          <p class="listDesc">
            이미지를 클릭하면 해당 플레이리스트로 이동합니다.
          </p>
        </div>
        <div class="detailDiv">
          <a href="https://www.youtube.com/watch?v=JT9-MoQ1j5s" target="_blank">
            <img
              class="listImgDetail"
              src="images/det_img_15.jpg"
              alt="det_img_15.jpg"
            />
          </a>
          <a class="listTitle">
            🎹 내 방을 포근하게 감싸줄 따스한 LP감성의 재즈 [00:57:57]
          </a>
          <p class="listDesc">
            이미지를 클릭하면 해당 플레이리스트로 이동합니다.
          </p>
        </div>
        <div class="detailDiv">
          <a href="https://www.youtube.com/watch?v=Y5G-6MNaRaQ" target="_blank">
            <img
              class="listImgDetail"
              src="images/det_img_16.jpg"
              alt="det_img_16.jpg"
            />
          </a>
          <a class="listTitle">
            🎹 20가지 무드로 듣는 여름날의 재즈, 썸머타임 [01:42:49]
          </a>
          <p class="listDesc">
            이미지를 클릭하면 해당 플레이리스트로 이동합니다.
          </p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="mainHeaderArea">
      <div className="mainDiv">
        <header className="helloHeader">
          <nav className="headerNav">
            <NavLink exact to="/">
              <h1 className="mainTitle">Hello, Music!</h1>
            </NavLink>
          </nav>
        </header>
      </div>
      <div className="catDiv">
        <nav className="catNav">
          <ul className="catUl">
            {/* <li className="catLis">
              <NavLink exact to="/">
                <button role="button" className="catBtns catBtnsS">
                  Home
                </button>
              </NavLink>
            </li> */}
            <li className="catLis">
              <NavLink to="/Lofi">
                <button role="button" className="catBtns">
                  Lo-fi
                </button>
              </NavLink>
            </li>

            <li className="catLis">
              <NavLink to="/Pop">
                <button
                  role="button"
                  className="catBtns"
                  onclick="location.href='list02.html'"
                >
                  Pop
                </button>
              </NavLink>
            </li>
            <li className="catLis">
              <NavLink to="/Piano">
                <button
                  role="button"
                  className="catBtns"
                  onclick="location.href='list02.html'"
                >
                  Piano
                </button>
              </NavLink>
            </li>
            <li className="catLis">
              <NavLink to="/Jazz">
                <button
                  role="button"
                  className="catBtns"
                  onclick="location.href='list02.html'"
                >
                  Jazz
                </button>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/Lofi">
          <Lofi></Lofi>
        </Route>
        <Route path="/Pop">
          <Pop></Pop>
        </Route>
        <Route path="/Piano">
          <Piano></Piano>
        </Route>
        <Route path="/Jazz">
          <Jazz></Jazz>
        </Route>
        <Route path="/LofiDetail">
          <LofiDetail></LofiDetail>
        </Route>
        <Route path="/PopDetail">
          <PopDetail></PopDetail>
        </Route>
        <Route path="/PianoDetail">
          <PianoDetail></PianoDetail>
        </Route>
        <Route path="/JazzDetail">
          <JazzDetail></JazzDetail>
        </Route>
        <Route path="/">페이지를 찾을 수 없습니다.</Route>
      </Switch>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
