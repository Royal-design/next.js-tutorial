export async function GET() {
  return Response.json([
    {
      id: 1,
      text: "this is first comment"
    },
    {
      id: 2,
      text: "this is second comment"
    },
    {
      id: 3,
      text: "this is third comment"
    }
  ]);
}
