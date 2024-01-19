import React from "react";
import { useQuery } from "react-query";
import BackButton from "../../src/@core/utils/back-button";
import Link from "next/link";
import { Pencil } from "react-bootstrap-icons";
import Avatar from "react-avatar";
import { getProfile } from "../../src/@core/api/profile";
import ProfileItems from "../../src/components/profile/profile-items";
import Skeleton from "react-loading-skeleton";

function Profile() {
  const {
    data: profileData,
    isLoading,
    isError,
  } = useQuery("profile", getProfile);

  console.log(profileData);
  if (isLoading) {
    // Loading state with skeletons
    return (
      <div className="p-5 container">
        <BackButton />
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div>
              <Skeleton circle height={70} width={70} />
            </div>
            <div className="text-left">
              <div className="font-bold">
                <Skeleton width={100} />
              </div>
              <div>
                <Skeleton width={80} />
              </div>
            </div>
          </div>

          <Link
            href="/profile/edit"
            className="button !w-min !rounded-2xl !p-4"
          >
            <Skeleton width={30} height={30} />
          </Link>
        </div>
        <ProfileItems />
      </div>
    );
  }

  if (isError) {
    // Error state
    return <p>Error fetching profile data: {isError.message}</p>;
  }

  const { name, mobile_number, profile_picture } = profileData;

  return (
    <div className="p-5 container">
      <BackButton />
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <div>
            <Avatar
              src={profileData ? profile_picture : name}
              name={name}
              size="70"
              round
              className="!bg-primary/50"
            />
          </div>
          <div className="text-left">
            <div className="font-bold">{name ? name : "your name"}</div>
            <div>{mobile_number ? mobile_number : "your number"}</div>
          </div>
        </div>

        <Link href="/profile/edit" className="button !w-min !rounded-2xl !p-4">
          <Pencil color="white" />
        </Link>
      </div>
      <ProfileItems />
    </div>
  );
}

export default Profile;
