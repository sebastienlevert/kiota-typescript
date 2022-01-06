import { UserRequestBuilder } from './users/item/userRequestBuilder';
import { UsersRequestBuilder } from './users/usersRequestBuilder';
import { RequestAdapter } from '@microsoft/kiota-abstractions';
/** The main entry point of the SDK, exposes the configuration and the fluent API.  */
export declare class GraphServiceClient {
    /** Path parameters for the request  */
    private readonly pathParameters;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate;
    get users(): UsersRequestBuilder;
    /**
     * Instantiates a new GraphServiceClient and sets the default values.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(requestAdapter: RequestAdapter);
    /**
     * Gets an item from the MicrosoftGraph.users.item collection
     * @param id Unique identifier of the item
     * @returns a userRequestBuilder
     */
    usersById(id: string): UserRequestBuilder;
}
//# sourceMappingURL=graphServiceClient.d.ts.map