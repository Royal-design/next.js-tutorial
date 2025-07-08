import prisma from "@/lib/db";

async function main() {
  const blogs = [
    {
      title: "The Future of Computing",
      description:
        "Exploring how Ada Lovelace laid the groundwork for modern programming.",
      slug: "future-of-computing",
      author: "Ada Lovelace",
    },
    {
      title: "Cracking the Code",
      description: "Alan Turing’s legacy in computer science and cryptography.",
      slug: "cracking-the-code",
      author: "Alan Turing",
    },
    {
      title: "Debugging the Navy",
      description: "Grace Hopper and the invention of the compiler.",
      slug: "debugging-the-navy",
      author: "Grace Hopper",
    },
    {
      title: "Building Linux",
      description: "Linus Torvalds and the creation of the open-source OS.",
      slug: "building-linux",
      author: "Linus Torvalds",
    },
    {
      title: "Software That Saved Apollo",
      description:
        "Margaret Hamilton’s code that helped land humans on the Moon.",
      slug: "software-that-saved-apollo",
      author: "Margaret Hamilton",
    },
  ];
  await prisma.blog.createMany({ data: blogs });

  console.log("✅ Seeded 5 users");
}

main()
  .catch((e) => {
    console.error("❌ Error seeding:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
