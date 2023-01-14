// import {makeUrl, toPayload} from './etc/apiHelpers'
// import * as URLHandler from './etc/urlHandler'
import {json} from "d3";
import {makeUrl, toPayload} from "./etc/apiHelpers";


export type LoopBackResult = {
  name: string,
  lastName: string,
  age: number
}

/** A simple wrapper class for interfacing with a backend
 *
 */
export class API {
  private baseURL: string

  /**
   * @param baseURL The URL for the backend
   * @param apiSubRoute The route to append to backend calles
   */
  constructor(baseURL: string | null = "", apiSubRoute = "/api") {
    const extension = apiSubRoute == null ? "" : apiSubRoute

    // For monolithic SPAs, assume the backend is running at the same base URL of the webpage
    // const base = baseURL == null ? URLHandler.basicURL() : baseURL
    this.baseURL = baseURL + extension;
  }

  /**  Example GET request typed with expected response
   *
   * @param firstname
   */
  getAHi(firstname: string): Promise<string> {
    const toSend = {
      firstname: firstname
    }

    const url = makeUrl(this.baseURL + "/get-a-hi", toSend)
    return json(url)
  }

  /** Example POST request typed with expected response
   *
   * @param firstname
   */
  postABye(firstname: string): Promise<string> {
    const toSend = {
      firstname: firstname,
    }

    const url = makeUrl(this.baseURL + '/post-a-bye');
    const payload = toPayload(toSend)
    return json(url, payload)
  }

  loopbackTest(name: string, lastName = "Simpson", age = 49): Promise<LoopBackResult> {
    const toSend = {name, lastName, age}

    return new Promise<LoopBackResult>((resolve) => {
      setTimeout(() => resolve(toSend), 1000)
    })
  }


}
