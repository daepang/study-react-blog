import * as React from 'react';
import { Link } from 'react-router-dom';
export default function PostDetail () {
    return (
        <>
            <div className={'post__detail'}>
                <div className={'post__box'}>
                    <div className={'post__title'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                    <div className="post__profile-box">
                        <div className="post__profile" />
                        <div className="post_author-name">DAEPANG</div>
                        <div className="post__date">2024.10.22 화요일</div>
                    </div>
                    <div className="post__utils-box">
                        <div className="post__delete">삭제</div>
                        <div className="post__edit">
                            <Link to={`/posts/edit/1`}>수정</Link>
                        </div>
                    </div>
                    <div className="post__text">
                        test text. test text. test text. test text. test text.
                        test text. test text. test text. test text. test text.
                        test text. test text. test text. test text. test text.
                        test text. test text. test text. test text. test text.
                        test text. test text. test text. test text. test text.
                    </div>
                </div>

            </div>
        </>
    );
};