import React from "react";
import BackButton from "../../src/@core/utils/back-button";
// import UserAvatar from "../../src/components/profile/user-avatar";
import Link from "next/link";
import { Pencil } from "react-bootstrap-icons";
import ToggleButton from "../../src/@core/utils/toggle-btn";
import Card from "../../src/components/ui/Card";

import SelectInput from "../../src/@core/utils/select-input";
import { languages } from "../../src/@core/data/languages";
function Settings({}) {
  const onLanguageChange = (e) => {};

  const onGetStarted = (l) => {};
  return (
    <div className="p-5 container">
      <BackButton />
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <div> {/* <UserAvatar /> */}</div>
          <div className="text-left">
            <div className="font-bold">John Kevin</div>
            <div>phone</div>
          </div>
        </div>
        <Link href="/profile/edit" className="button !w-min !rounded-2xl !p-4">
          <Pencil color="white" />
        </Link>
      </div>

      <Card className="mt-5 p-4 border rounded-md mb-6">
        <div className="flex items-center border-b-1 pb-2 justify-between mb-4">
          <div className="text-sm font-semibold mb-2">Notification Sound</div>
          <ToggleButton />
        </div>

        <div className="flex items-center border-b-1 pb-2  justify-between mb-4">
          <div className="text-sm font-semibold mb-2">Dark Mode</div>
          <ToggleButton />
        </div>
        <div className="flex items-center border-b-1 pb-2  justify-between mb-4">
          <div className="text-sm font-semibold mb-2">Privacy Policy</div>
        </div>

        <div className="flex items-center justify-between  !my-0">
          <div className="text-sm font-semibold">Change Language</div>
          <SelectInput
            onChange={onLanguageChange}
            onGetStarted={onGetStarted}
            options={languages}
          />
        </div>
      </Card>
    </div>
  );
}

export default Settings;
