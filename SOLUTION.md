# 설명

리소스를 등록하고 뷰어를 통해 확인할 수 있는 앱입니다.

# 프로젝트 구조

```
business-canvas-test-app/
  client/
    // React app files
  server/
    // Node.js server files
```

노드 서버와 리액트 클라이언트 앱의 코드가 각각 server / client 폴더에 나뉘어져 있는 구조입니다.
README.md를 참고하여 서버 실행을 선행해야 클라이언트의 기능이 정상 동작합니다.

# 클라이언트 폴더 구조

```bash
business-canvas-test-client/
  src/
     components/
      /Component
	index.tsx
	styles.ts
	type.d.ts
     core/
     pages/
       /Page
	 Page.tsx
	 styles.ts
	 type.d.ts
     recoil/
       /state
	 state.ts
     types/
```
# 서버 폴더 구조

```bash
business-canvas-test-server/
  public/
    upload/
      image.jpg
  server.js
```

public : 리소스를 포함합니다. 현재는 upload폴더에 이미지를 저장하고 있습니다.
server.js : 서버 파일입니다.

# 기술 스택

### **Front-end**

- React
- TypeScript
- styled-component
- Recoil

### **Back-end**

- Node.js
- Express.js

# 특징

- 앱 기능은 요구사항과 동일합니다.
- 이미지 다중 업로드와 확인을 위해 Node.js 서버가 존재합니다.
  - 이미지는 public/upload 폴더에 저장됩니다.
  - 5000번을 사용하고 있는데 따로 보여지는 페이지는 없습니다.
- 패키지 충돌 에러를 해결하지 못하여 typed-design-system의 아이콘을 사용하지 못하고 기본 버튼을 사용했습니다.
