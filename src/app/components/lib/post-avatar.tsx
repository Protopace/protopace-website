import Avatar from "@mui/material/Avatar";
import Date from "@/app/components/lib/date";

export default function PostAvatar({
  avatarAlt,
  avatarSrc,
  authorName,
  postDate,
}: {
  avatarAlt: string;
  avatarSrc: string;
  authorName: string;
  postDate: string;

}) {
  return (

    <div className="grid grid-cols-8 gap-x-4">
      <div className="row-span-2 flex justify-center items-center">
        <Avatar alt={avatarAlt} src={avatarSrc}></Avatar>
      </div>

      <div className="col-span-7 text-md">
        {authorName}
      </div>

      <div className="col-span-7 text-md">
        <Date dateString={postDate} />
      </div>

  </div>

  );
}
