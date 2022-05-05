import React from 'react';
import './Home.css'

export default function Home() {
  return  <div className="home_page_main">
            <div className="home_page">
                <div className="home_page_avatar"></div>
                <div className="home_page_name">Георгий</div>
                <form action="/" method="post">
                    <button className="home_page_post">Новая запись</button>
                </form>
            </div>
            <div className="home_page_post_new">
                <div className="home_page_post_head">Название поста</div>
                <div className="home_page_post_text"></div>
            </div>
            <div className="home_page_post_new"></div>
            <div className="home_page_post_new"></div>
        </div>

}