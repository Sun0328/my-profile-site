-- CreateTable
CREATE TABLE "message" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT NOT NULL,
    "sender" TEXT,
    "sender_avatar" TEXT,

    CONSTRAINT "message_pkey" PRIMARY KEY ("id")
);
