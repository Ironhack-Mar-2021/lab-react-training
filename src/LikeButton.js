import React, { useState } from 'react';

function LikeButton() {
  let [like1, setLike1] = useState(0);
  let [like2, setLike2] = useState(0);

  return (
    <div>
      <button onClick={() => setLike1(++like1)}>{like1} Likes</button>
      <button onClick={() => setLike2(++like2)}>{like2} Likes</button>
    </div>
  );
}

export default LikeButton;
