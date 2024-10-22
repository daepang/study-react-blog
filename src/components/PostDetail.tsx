import * as React from 'react';

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