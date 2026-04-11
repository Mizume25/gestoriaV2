import  ProfileImage  from '@/core/utils/profile/ProfileImage';
import  ProfileLayout  from '@/core/utils/profile/ProfileLayout';
import  ProfileContent from '@/core/utils/profile/ProfileContent';
function show() {
  return (
    <ProfileLayout>
      <ProfileImage></ProfileImage>
      <ProfileContent></ProfileContent>
    </ProfileLayout>
  )
}

export default show