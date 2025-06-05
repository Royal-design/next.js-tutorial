import React from "react";

export default async function ProfileDetailPage({
  params
}: {
  params: Promise<{ profileId: string }>;
}) {
  const profileId = (await params).profileId;
  console.log(profileId);

  return <div>Profile for Emmanuel</div>;
}
