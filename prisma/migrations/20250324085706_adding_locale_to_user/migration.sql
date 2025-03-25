-- AlterTable
ALTER TABLE "User" ADD COLUMN     "perferredLocale" BIGINT;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_perferredLocale_fkey" FOREIGN KEY ("perferredLocale") REFERENCES "Locale"("id") ON DELETE SET NULL ON UPDATE CASCADE;
