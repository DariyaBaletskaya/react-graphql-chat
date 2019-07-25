function postMessage(parent, args, context, info) {
  return context.prisma.createMessage({
    text: args.text
  });
}

async function postReply(parent, args, context, info) {
  const messageExists = await context.prisma.$exists.message({
    id: args.messageId
  });

  if (!messageExists) {
    throw new Error(`Product with ID ${args.messageId} does not exist`);
  }

  return context.prisma.createReply({
    text: args.text,
    message: { connect: { id: args.messageId } }
  });
}

module.exports = {
  postMessage,
  postReply
};
