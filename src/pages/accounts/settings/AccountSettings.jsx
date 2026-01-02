import SettingsSidebar from "../../../components/settings/SettingsSidebar";
import ProfileInfoSection from "../../../components/settings/profile/ProfileInfoSection";
import AddressInfoSection from "../../../components/settings/profile/AddressInfoSection";


export default function AccountSettings() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* LEFT SIDEBAR */}
        <div className="lg:col-span-3">
          <SettingsSidebar />
        </div>

        {/* RIGHT CONTENT */}
        <div className="lg:col-span-9 space-y-6">
          <ProfileInfoSection />
          <AddressInfoSection />
        </div>

      </div>
    </div>
  );
}
