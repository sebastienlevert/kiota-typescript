import {WithPetItemRequestBuilder} from './pet/item/withPetItemRequestBuilder';
import {PetRequestBuilder} from './pet/petRequestBuilder';
import {StoreRequestBuilder} from './store/storeRequestBuilder';
import {WithUsernameItemRequestBuilder} from './user/item/withUsernameItemRequestBuilder';
import {UserRequestBuilder} from './user/userRequestBuilder';
import {enableBackingStoreForSerializationWriterFactory, getPathParameters, ParseNodeFactoryRegistry, registerDefaultDeserializer, registerDefaultSerializer, RequestAdapter, SerializationWriterFactoryRegistry} from '@microsoft/kiota-abstractions';
import {JsonParseNodeFactory, JsonSerializationWriterFactory} from '@microsoft/kiota-serialization-json';
import {TextParseNodeFactory, TextSerializationWriterFactory} from '@microsoft/kiota-serialization-text';

/** The main entry point of the SDK, exposes the configuration and the fluent API. */
export class ApiClient {
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The pet property */
    public get pet(): PetRequestBuilder {
        return new PetRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** The store property */
    public get store(): StoreRequestBuilder {
        return new StoreRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /** The user property */
    public get user(): UserRequestBuilder {
        return new UserRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new ApiClient and sets the default values.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(requestAdapter: RequestAdapter) {
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.pathParameters = {};
        this.urlTemplate = "{+baseurl}";
        this.requestAdapter = requestAdapter;
        registerDefaultSerializer(JsonSerializationWriterFactory);
        registerDefaultSerializer(TextSerializationWriterFactory);
        registerDefaultDeserializer(JsonParseNodeFactory);
        registerDefaultDeserializer(TextParseNodeFactory);
        if (requestAdapter.baseUrl === undefined || requestAdapter.baseUrl === "") {
            requestAdapter.baseUrl = "/v3";
        }
    };
    /**
     * Gets an item from the ApiSdk.pet.item collection
     * @param id Unique identifier of the item
     * @returns a WithPetItemRequestBuilder
     */
    public petById(id: string) : WithPetItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["petId"] = id
        return new WithPetItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the ApiSdk.user.item collection
     * @param id Unique identifier of the item
     * @returns a WithUsernameItemRequestBuilder
     */
    public userById(id: string) : WithUsernameItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["username"] = id
        return new WithUsernameItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
