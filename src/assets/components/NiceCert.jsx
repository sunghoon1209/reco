import React, { useEffect } from 'react';

const NiceCert = ({ reqSeq, encData, siteCode }) => {
  useEffect(() => {
    document.forms['niceCertForm'].submit();
  }, []);

  return (
    <form
      name="niceCertForm"
      method="post"
      action="https://nice.checkplus.co.kr/CheckPlusSafeModel/checkplus.cb"
    >
      <input type="hidden" name="m" value="checkplusService" />
      <input type="hidden" name="EncodeData" value={encData} />
    </form>
  );
};

export default NiceCert;
