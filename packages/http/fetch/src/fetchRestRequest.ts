import { RestRequest } from "@microsoft/kiota-abstractions";

import { RequestOption } from "../../../abstractions/src/requestOption";
import { HttpClient } from "./httpClient";

export class FetchRequest implements RestRequest {
	public constructor(private urlString: string, private httpClient: HttpClient, private requestInit: RequestInit) {}
	public get(): Promise<unknown> {
		return this.send();
	}
	public post(): Promise<unknown> {
		return this.send();
	}

    public patch(): Promise<unknown> {
		return this.send();
	}
	public delete(): Promise<unknown> {
		return this.send();
	}

	private send(requestInit?: RequestInit, requestOptions?: Record<string, RequestOption>): Promise<unknown> {
		return this.httpClient.executeFetch(this.urlString, this.requestInit, requestOptions);
	}
}
