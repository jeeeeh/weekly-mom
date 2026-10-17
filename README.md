# 이번주도 다다다와 함께❤️

매주 일요일 아침 9시쯤, 세 아이와 다음 7일(월~일) 동안 해 볼 엄마표 놀이·도전 재료 요리·체험·발달/건강 체크를 HTML 한 장으로 만들어 텔레그램으로 보내는 저장소예요.

- `issues/YYYY-MM-DD.html` : 주차별 소식지 (파일 이름 = 그 주 시작일)
- `BRIEF.md` : 매주 소식지를 만들 때 따르는 기준
- `.github/workflows/send.yml` : `issues/`에 새 파일이 올라오면 텔레그램으로 보냄 (Actions 탭에서 수동 재발송도 가능)

필요한 비밀값 (Settings → Secrets and variables → Actions): `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`, 단체방도 받으려면 `TELEGRAM_GROUP_CHAT_ID` (- 로 시작하는 숫자)

## 🐯 아기호랑이 소식지 (tiger/)
전국 2022년생 친구 엄마들과 카톡으로 나누는 주간 소식지. 기준은 `tiger/BRIEF.md`. 매주 일요일 아침 9시쯤 내 텔레그램으로 카톡용 이미지 2장·소식지 파일·카톡 메시지가 와요 (`send-tiger.yml`). 공유 링크: https://jeeeeh.github.io/weekly-mom/tiger/ (GitHub Pages)
