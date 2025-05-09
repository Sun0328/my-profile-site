-- CreateTable
CREATE TABLE "project" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "icon" TEXT,
    "description" TEXT NOT NULL,
    "link" TEXT,

    CONSTRAINT "project_pkey" PRIMARY KEY ("id")
);
