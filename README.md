# 이번주 다다다랑 뭐할까

매주 화요일 밤 9시쯤, 세 아이와 다음 7일(수~다음 주 화) 동안 해 볼 엄마표 놀이·체험·추천도서·발달/건강 체크를 HTML 한 장으로 만들어 텔레그램으로 보내는 저장소예요.

- `issues/YYYY-MM-DD.html` : 주차별 소식지 (파일 이름 = 그 주 시작일)
- `BRIEF.md` : 매주 소식지를 만들 때 따르는 기준
- `.github/workflows/send.yml` : `issues/`에 새 파일이 올라오면 텔레그램으로 보냄 (Actions 탭에서 수동 재발송도 가능)

필요한 비밀값 (Settings → Secrets and variables → Actions): `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`
