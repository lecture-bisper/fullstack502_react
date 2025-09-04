package bitc.full502.boardapiserver.controller;

import org.springframework.web.bind.annotation.*;

//  WEB (웹브라우저) 는 보안을 위해서 기본적으로 SOP 정책을 사용함
//  다른 곳의 리소스를 사용하고자 할 경우 CORS 정책을 위반하게 되어 오류가 발생함
//  CORS 오류는 웹 브라우저에서 발생함 (POST MAN 같은 프로그램으로 통신 시 오류 없음)

//  SOP (Same-Origin Policy) : 동일 출처 정책, 동일한 출처의 리소스만 사용하는 정책
//  CORS (Cross-Origin Resource Sharing) : 다른 출처의 자원을 공유하여 사용하는 것
//  기본적으로 하나의 출처에서 리소스를 사용 시 문제가 없으나, 다른 출처에서 리소스를 가져와서 사용 시 CORS 오류가 발생함

//  CORS 오류 해결 방법
//  1. 리액트에서 프록시 서버 사용
//  2. 스프링 서버에서 CORS 설정
//    2.1 @CrossOrigin 어노테이션을 사용 (Controller 클래스, 메소드에 사용)
//      접속을 허용할 url을 여러개 입력할 경우 배열로 URL을 설정
//    2.2 WebMvcConfigure 를 상속받아 addCorsMapping() 메소드를 오버라이딩하여 설정

//@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:3000"})
//@RequestMapping("/api")
@RestController
public class TestAPIController {

//  메소드에 직접 입력하여 사용, 다른 메소드에는 영향이 없음
//  @CrossOrigin(origins = "http://localhost:5173")
  @GetMapping({"", "/"})
  public Object index() {
    return "Board API Server 접속";
  }

  @GetMapping("/test1")
  public Object test1() {
    return "@CrossOrigin 을 메소드에 직접 사용";
  }


  @GetMapping("/nonParamGet")
  public Object nonParamGet() {
    return "파라미터가 없는 GET 요청";
  }

  @GetMapping("/urlParamGet")
  public Object urlParamGet(@RequestParam("userId") String userId, @RequestParam("userPw") String userPw) {

    return "URL에 파라미터가 포함된 GET 요청 (" + userId + ", " + userPw + ")";
  }

  @GetMapping("/noUrlParamGet")
  public Object noUrlParamGet(@RequestParam("userId") String userId, @RequestParam("userPw") String userPw) {

    return "URL에 파라미터 포함되지 않은 GET 요청 (" + userId + ", " + userPw + ")";
  }

  @DeleteMapping("/paramDelete")
  public Object paramDelete(@RequestParam("userId") String userId) {
    return "URL에 파라미터가 포함된 DELETE 요청 (" + userId + ")";
  }

  @PostMapping("/nonParamPost")
  public Object nonParamPost() {
    return "파라미터가 없는 POST 요청";
  }

//    서버에서 DTO 클래스 타입으로 받으려면 @RequestBody 어노테이션을 사용해야 함
  @PostMapping("/paramPost")
  public Object paramPost(@RequestParam("userId") String userId, @RequestParam("userPw") String userPw) {
    return "파라미터가 있는 POST 요청 (" + userId + ", " + userPw + ")";
  }

  @PutMapping("/paramPut")
  public Object paramPut(@RequestParam("userId") String userId, @RequestParam("userPw") String userPw) {
    return "파라미터가 있는 PUT 요청 (" + userId + ", " + userPw + ")";
  }
}














