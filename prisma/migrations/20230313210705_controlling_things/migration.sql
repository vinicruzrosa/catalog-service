-- CreateTable
CREATE TABLE "Livro" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "editora" TEXT NOT NULL,
    "ano_publicacao" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Livro_pkey" PRIMARY KEY ("id")
);
