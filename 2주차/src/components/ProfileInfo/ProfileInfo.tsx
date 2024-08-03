import MannerTemperature from "./MannerTemperature";

interface ProfileInfoPropsType {
  id: number | string;
  photo: string;
  userName: string;
  userAddress: string;
  temperature: number;
}

function ProfileInfo({ id, photo, userName, userAddress, temperature }: ProfileInfoPropsType) {
  return (
    <section aria-label="판매자 프로필 정보" className="profile-info">
      <div role="group" aria-label="판매자 기본정보" className="profile-info-personal">
        <img src={photo} alt={userName} />
        <dl>
          <div>
            <dt className="sr-only">판매자 닉네임:</dt>
            <dd>{userName}</dd>
          </div>
          <div>
            <dt className="sr-only">판매자 주소:</dt>
            <dd>{userAddress}</dd>
          </div>
        </dl>
      </div>
      <MannerTemperature id={id} temperature={temperature} />
    </section>
  );
}

export default ProfileInfo;
