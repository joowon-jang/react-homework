import ProfileInfo from "@/components/ProfileInfo/ProfileInfo";
import profileList from "@/data/profileList";

function ProfileInfoPage() {
  return (
    <ul style={{ width: "400px", display: "flex", flexDirection: "column", gap: "1rem" }}>
      {...profileList.map((item) => (
        <li>
          <ProfileInfo {...item} />
        </li>
      ))}
    </ul>
  );
}

export default ProfileInfoPage;
