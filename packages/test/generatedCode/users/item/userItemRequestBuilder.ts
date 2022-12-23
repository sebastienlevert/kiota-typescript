import { ApiClient } from "../../apiClient";
import { deserializeIntoUser } from "../../models/deserializeIntoUser";
import { serializeUser } from "../../models/serializeUser";
import { User } from "../../models/user";
import { CreatedObjectsRequestBuilder } from "./createdObjects/createdObjectsRequestBuilder";
import { DirectoryObjectItemRequestBuilder as i5eed8585f0e3283348246e245da2a8062b886f11233fe02158dc2fd851fa5cb1 } from "./createdObjects/item/directoryObjectItemRequestBuilder";
import { DirectoryObjectItemRequestBuilder as i0c1a1b9376bd00b00f88b35ac4319ad248e61a7d2f339705d240a7e2553a7f56 } from "./directReports/item/directoryObjectItemRequestBuilder";
import { ExtensionsRequestBuilder } from "./extensions/extensionsRequestBuilder";
import { ExtensionItemRequestBuilder } from "./extensions/item/extensionItemRequestBuilder";
import { LicenseDetailsItemRequestBuilder } from "./licenseDetails/item/licenseDetailsItemRequestBuilder";
import { LicenseDetailsRequestBuilder } from "./licenseDetails/licenseDetailsRequestBuilder";
import { ManagerRequestBuilder } from "./manager/managerRequestBuilder";
import { DirectoryObjectItemRequestBuilder as ia6e9e43a5ea33c64071b78c19e38c5c691aae47e6d98d4a7524d77f8337441c1 } from "./memberOf/item/directoryObjectItemRequestBuilder";
import { MemberOfRequestBuilder } from "./memberOf/memberOfRequestBuilder";
import { NotificationItemRequestBuilder } from "./notifications/item/notificationItemRequestBuilder";
import { NotificationsRequestBuilder } from "./notifications/notificationsRequestBuilder";
import { OAuth2PermissionGrantItemRequestBuilder } from "./oauth2PermissionGrants/item/oAuth2PermissionGrantItemRequestBuilder";
import { Oauth2PermissionGrantsRequestBuilder } from "./oauth2PermissionGrants/oauth2PermissionGrantsRequestBuilder";
import { OutlookRequestBuilder } from "./outlook/outlookRequestBuilder";
import { DirectoryObjectItemRequestBuilder as ibb1775edc8b00d6847216de6125761519cda46437475647d9e60f76954f077ae } from "./ownedDevices/item/directoryObjectItemRequestBuilder";
import { OwnedDevicesRequestBuilder } from "./ownedDevices/ownedDevicesRequestBuilder";
import { DirectoryObjectItemRequestBuilder as i98442ed3c02b04c2ea2cc3066430c127966655dd1b8dca84cb0f918302ae7194 } from "./ownedObjects/item/directoryObjectItemRequestBuilder";
import { OwnedObjectsRequestBuilder } from "./ownedObjects/ownedObjectsRequestBuilder";
import { PhotoRequestBuilder } from "./photo/photoRequestBuilder";
import { ProfilePhotoItemRequestBuilder } from "./photos/item/profilePhotoItemRequestBuilder";
import { PhotosRequestBuilder } from "./photos/photosRequestBuilder";
import { DirectoryObjectItemRequestBuilder as ib10e13dd31dd16fe44cd02de693cacca2390370a3334683b4e37c5ee8b0d9e75 } from "./registeredDevices/item/directoryObjectItemRequestBuilder";
import { RegisteredDevicesRequestBuilder } from "./registeredDevices/registeredDevicesRequestBuilder";
import { SettingsRequestBuilder } from "./settings/settingsRequestBuilder";
import { TodoRequestBuilder } from "./todo/todoRequestBuilder";
import { DirectoryObjectItemRequestBuilder as i5b7723796b9ab65897fb41e71fbf92926338e0d88e2286f616e6e58348a1e1ed } from "./transitiveMemberOf/item/directoryObjectItemRequestBuilder";
import { TransitiveMemberOfRequestBuilder } from "./transitiveMemberOf/transitiveMemberOfRequestBuilder";
import { DirectoryObjectItemRequestBuilder as ifa5ee9e926fd626bdf27cc2feeb41f5c4fa82f779afc20fef1da6f0cfd404e58 } from "./transitiveReports/item/directoryObjectItemRequestBuilder";
import { TransitiveReportsRequestBuilder } from "./transitiveReports/transitiveReportsRequestBuilder";
import { UserItemRequestBuilderDeleteRequestConfiguration } from "./userItemRequestBuilderDeleteRequestConfiguration";
import { UserItemRequestBuilderGetRequestConfiguration } from "./userItemRequestBuilderGetRequestConfiguration";
import { UserItemRequestBuilderPatchRequestConfiguration } from "./userItemRequestBuilderPatchRequestConfiguration";
import {
  getPathParameters,
  HttpMethod,
  Parsable,
  ParsableFactory,
  RequestAdapter,
  RequestInformation,
  RequestOption,
  ResponseHandler,
} from "@microsoft/kiota-abstractions";

/** Builds and executes requests for operations under /users/{user-id} */
export class UserItemRequestBuilder {
  /** The createdObjects property */
  public get createdObjects(): CreatedObjectsRequestBuilder {
    return new CreatedObjectsRequestBuilder(
      this.pathParameters,
      this.requestAdapter
    );
  }
  /** The directReports property */
  /*public get directReports(): DirectReportsRequestBuilder {
        return new DirectReportsRequestBuilder(this.pathParameters, this.requestAdapter);
    }*/
  /** The extensions property */
  public get extensions(): ExtensionsRequestBuilder {
    return new ExtensionsRequestBuilder(
      this.pathParameters,
      this.requestAdapter
    );
  }
  /** The licenseDetails property */
  public get licenseDetails(): LicenseDetailsRequestBuilder {
    return new LicenseDetailsRequestBuilder(
      this.pathParameters,
      this.requestAdapter
    );
  }
  /** The manager property */
  public get manager(): ManagerRequestBuilder {
    return new ManagerRequestBuilder(this.pathParameters, this.requestAdapter);
  }
  /** The memberOf property */
  public get memberOf(): MemberOfRequestBuilder {
    return new MemberOfRequestBuilder(this.pathParameters, this.requestAdapter);
  }
  /** The notifications property */
  public get notifications(): NotificationsRequestBuilder {
    return new NotificationsRequestBuilder(
      this.pathParameters,
      this.requestAdapter
    );
  }
  /** The oauth2PermissionGrants property */
  public get oauth2PermissionGrants(): Oauth2PermissionGrantsRequestBuilder {
    return new Oauth2PermissionGrantsRequestBuilder(
      this.pathParameters,
      this.requestAdapter
    );
  }
  /** The outlook property */
  public get outlook(): OutlookRequestBuilder {
    return new OutlookRequestBuilder(this.pathParameters, this.requestAdapter);
  }
  /** The ownedDevices property */
  public get ownedDevices(): OwnedDevicesRequestBuilder {
    return new OwnedDevicesRequestBuilder(
      this.pathParameters,
      this.requestAdapter
    );
  }
  /** The ownedObjects property */
  public get ownedObjects(): OwnedObjectsRequestBuilder {
    return new OwnedObjectsRequestBuilder(
      this.pathParameters,
      this.requestAdapter
    );
  }
  /** Path parameters for the request */
  public readonly pathParameters: Record<string, unknown>;
  /** The photo property */
  public get photo(): PhotoRequestBuilder {
    return new PhotoRequestBuilder(this.pathParameters, this.requestAdapter);
  }
  /** The photos property */
  public get photos(): PhotosRequestBuilder {
    return new PhotosRequestBuilder(this.pathParameters, this.requestAdapter);
  }
  /** The registeredDevices property */
  public get registeredDevices(): RegisteredDevicesRequestBuilder {
    return new RegisteredDevicesRequestBuilder(
      this.pathParameters,
      this.requestAdapter
    );
  }
  /** The request adapter to use to execute the requests. */
  public readonly requestAdapter: RequestAdapter;
  /** The settings property */
  public get settings(): SettingsRequestBuilder {
    return new SettingsRequestBuilder(this.pathParameters, this.requestAdapter);
  }
  /** The todo property */
  public get todo(): TodoRequestBuilder {
    return new TodoRequestBuilder(this.pathParameters, this.requestAdapter);
  }
  /** The transitiveMemberOf property */
  public get transitiveMemberOf(): TransitiveMemberOfRequestBuilder {
    return new TransitiveMemberOfRequestBuilder(
      this.pathParameters,
      this.requestAdapter
    );
  }
  /** The transitiveReports property */
  public get transitiveReports(): TransitiveReportsRequestBuilder {
    return new TransitiveReportsRequestBuilder(
      this.pathParameters,
      this.requestAdapter
    );
  }
  /** Url template to use to build the URL for the current request builder */
  private readonly urlTemplate: string;
  /**
   * Instantiates a new UserItemRequestBuilder and sets the default values.
   * @param pathParameters The raw url or the Url template parameters for the request.
   * @param requestAdapter The request adapter to use to execute the requests.
   */
  public constructor(
    pathParameters: Record<string, unknown> | string | undefined,
    requestAdapter: RequestAdapter
  ) {
    if (!pathParameters) throw new Error("pathParameters cannot be undefined");
    if (!requestAdapter) throw new Error("requestAdapter cannot be undefined");
    this.urlTemplate = "{+baseurl}/users/{user%2Did}{?%24select,%24expand}";
    const urlTplParams = getPathParameters(pathParameters);
    this.pathParameters = urlTplParams;
    this.requestAdapter = requestAdapter;
  }
  /**
   * Delete user.   When deleted, user resources are moved to a temporary container and can be restored within 30 days.  After that time, they are permanently deleted.  To learn more, see deletedItems.
   * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
   * @returns a RequestInformation
   */
  public createDeleteRequestInformation(
    requestConfiguration?:
      | UserItemRequestBuilderDeleteRequestConfiguration
      | undefined
  ): RequestInformation {
    const requestInfo = new RequestInformation();
    requestInfo.urlTemplate = this.urlTemplate;
    requestInfo.pathParameters = this.pathParameters;
    requestInfo.httpMethod = HttpMethod.DELETE;
    if (requestConfiguration) {
      requestInfo.addRequestHeaders(requestConfiguration.headers);
      requestInfo.addRequestOptions(requestConfiguration.options);
    }
    return requestInfo;
  }
  /**
   * Gets an item from the ApiSdk.users.item.createdObjects.item collection
   * @param id Unique identifier of the item
   * @returns a DirectoryObjectItemRequestBuilder
   */
  public createdObjectsById(
    id: string
  ): i5eed8585f0e3283348246e245da2a8062b886f11233fe02158dc2fd851fa5cb1 {
    if (!id) throw new Error("id cannot be undefined");
    const urlTplParams = getPathParameters(this.pathParameters);
    urlTplParams["directoryObject%2Did"] = id;
    return new i5eed8585f0e3283348246e245da2a8062b886f11233fe02158dc2fd851fa5cb1(
      urlTplParams,
      this.requestAdapter
    );
  }
  /**
   * Retrieve the properties and relationships of user object. This operation returns by default only a subset of the more commonly used properties for each user. These _default_ properties are noted in the Properties section. To get properties that are _not_ returned by default, do a GET operation for the user and specify the properties in a `$select` OData query option. Because the **user** resource supports extensions, you can also use the `GET` operation to get custom properties and extension data in a **user** instance.
   * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
   * @returns a RequestInformation
   */
  public createGetRequestInformation(
    requestConfiguration?:
      | UserItemRequestBuilderGetRequestConfiguration
      | undefined
  ): RequestInformation {
    const requestInfo = new RequestInformation();
    requestInfo.urlTemplate = this.urlTemplate;
    requestInfo.pathParameters = this.pathParameters;
    requestInfo.httpMethod = HttpMethod.GET;
    requestInfo.headers["Accept"] = "application/json";
    if (requestConfiguration) {
      requestInfo.addRequestHeaders(requestConfiguration.headers);
      requestInfo.setQueryStringParametersFromRawObject(
        requestConfiguration.queryParameters
      );
      requestInfo.addRequestOptions(requestConfiguration.options);
    }
    return requestInfo;
  }
  /**
   * Update the properties of a user object. Not all properties can be updated by Member or Guest users with their default permissions without Administrator roles. Compare member and guest default permissions to see properties they can manage.
   * @param body
   * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
   * @returns a RequestInformation
   */
  public createPatchRequestInformation(
    body: User | undefined,
    requestConfiguration?:
      | UserItemRequestBuilderPatchRequestConfiguration
      | undefined
  ): RequestInformation {
    if (!body) throw new Error("body cannot be undefined");
    const requestInfo = new RequestInformation();
    requestInfo.urlTemplate = this.urlTemplate;
    requestInfo.pathParameters = this.pathParameters;
    requestInfo.httpMethod = HttpMethod.PATCH;
    if (requestConfiguration) {
      requestInfo.addRequestHeaders(requestConfiguration.headers);
      requestInfo.addRequestOptions(requestConfiguration.options);
    }
    requestInfo.setContentFromParsable(
      this.requestAdapter,
      "application/json",
      body as any,
      serializeUser
    );
    return requestInfo;
  }
  /**
   * Delete user.   When deleted, user resources are moved to a temporary container and can be restored within 30 days.  After that time, they are permanently deleted.  To learn more, see deletedItems.
   * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
   * @param responseHandler Response handler to use in place of the default response handling provided by the core service
   */
  public delete(
    requestConfiguration?:
      | UserItemRequestBuilderDeleteRequestConfiguration
      | undefined,
    responseHandler?: ResponseHandler | undefined
  ): Promise<void> {
    const requestInfo =
      this.createDeleteRequestInformation(requestConfiguration);
    return (
      this.requestAdapter?.sendNoResponseContentAsync(
        requestInfo,
        responseHandler,
        {}
      ) ?? Promise.reject(new Error("request adapter is null"))
    );
  }
  /**
   * Gets an item from the ApiSdk.users.item.directReports.item collection
   * @param id Unique identifier of the item
   * @returns a DirectoryObjectItemRequestBuilder
   */
  public directReportsById(
    id: string
  ): i0c1a1b9376bd00b00f88b35ac4319ad248e61a7d2f339705d240a7e2553a7f56 {
    if (!id) throw new Error("id cannot be undefined");
    const urlTplParams = getPathParameters(this.pathParameters);
    urlTplParams["directoryObject%2Did"] = id;
    return new i0c1a1b9376bd00b00f88b35ac4319ad248e61a7d2f339705d240a7e2553a7f56(
      urlTplParams,
      this.requestAdapter
    );
  }
  /**
   * Gets an item from the ApiSdk.users.item.extensions.item collection
   * @param id Unique identifier of the item
   * @returns a ExtensionItemRequestBuilder
   */
  public extensionsById(id: string): ExtensionItemRequestBuilder {
    if (!id) throw new Error("id cannot be undefined");
    const urlTplParams = getPathParameters(this.pathParameters);
    urlTplParams["extension%2Did"] = id;
    return new ExtensionItemRequestBuilder(urlTplParams, this.requestAdapter);
  }
  /**
   * Retrieve the properties and relationships of user object. This operation returns by default only a subset of the more commonly used properties for each user. These _default_ properties are noted in the Properties section. To get properties that are _not_ returned by default, do a GET operation for the user and specify the properties in a `$select` OData query option. Because the **user** resource supports extensions, you can also use the `GET` operation to get custom properties and extension data in a **user** instance.
   * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
   * @param responseHandler Response handler to use in place of the default response handling provided by the core service
   * @returns a Promise of User
   */
  public get(
    requestConfiguration?:
      | UserItemRequestBuilderGetRequestConfiguration
      | undefined,
    responseHandler?: ResponseHandler | undefined
  ): Promise<User | undefined> {
    const requestInfo = this.createGetRequestInformation(requestConfiguration);
    return (
      this.requestAdapter?.sendAsync<User>(
        requestInfo,
        deserializeIntoUser,
        responseHandler,
        {}
      ) ?? Promise.reject(new Error("request adapter is null"))
    );
  }
  /**
   * Gets an item from the ApiSdk.users.item.licenseDetails.item collection
   * @param id Unique identifier of the item
   * @returns a LicenseDetailsItemRequestBuilder
   */
  public licenseDetailsById(id: string): LicenseDetailsItemRequestBuilder {
    if (!id) throw new Error("id cannot be undefined");
    const urlTplParams = getPathParameters(this.pathParameters);
    urlTplParams["licenseDetails%2Did"] = id;
    return new LicenseDetailsItemRequestBuilder(
      urlTplParams,
      this.requestAdapter
    );
  }
  /**
   * Gets an item from the ApiSdk.users.item.memberOf.item collection
   * @param id Unique identifier of the item
   * @returns a DirectoryObjectItemRequestBuilder
   */
  public memberOfById(
    id: string
  ): ia6e9e43a5ea33c64071b78c19e38c5c691aae47e6d98d4a7524d77f8337441c1 {
    if (!id) throw new Error("id cannot be undefined");
    const urlTplParams = getPathParameters(this.pathParameters);
    urlTplParams["directoryObject%2Did"] = id;
    return new ia6e9e43a5ea33c64071b78c19e38c5c691aae47e6d98d4a7524d77f8337441c1(
      urlTplParams,
      this.requestAdapter
    );
  }
  /**
   * Gets an item from the ApiSdk.users.item.notifications.item collection
   * @param id Unique identifier of the item
   * @returns a NotificationItemRequestBuilder
   */
  public notificationsById(id: string): NotificationItemRequestBuilder {
    if (!id) throw new Error("id cannot be undefined");
    const urlTplParams = getPathParameters(this.pathParameters);
    urlTplParams["notification%2Did"] = id;
    return new NotificationItemRequestBuilder(
      urlTplParams,
      this.requestAdapter
    );
  }
  /**
   * Gets an item from the ApiSdk.users.item.oauth2PermissionGrants.item collection
   * @param id Unique identifier of the item
   * @returns a OAuth2PermissionGrantItemRequestBuilder
   */
  public oauth2PermissionGrantsById(
    id: string
  ): OAuth2PermissionGrantItemRequestBuilder {
    if (!id) throw new Error("id cannot be undefined");
    const urlTplParams = getPathParameters(this.pathParameters);
    urlTplParams["oAuth2PermissionGrant%2Did"] = id;
    return new OAuth2PermissionGrantItemRequestBuilder(
      urlTplParams,
      this.requestAdapter
    );
  }
  /**
   * Gets an item from the ApiSdk.users.item.ownedDevices.item collection
   * @param id Unique identifier of the item
   * @returns a DirectoryObjectItemRequestBuilder
   */
  public ownedDevicesById(
    id: string
  ): ibb1775edc8b00d6847216de6125761519cda46437475647d9e60f76954f077ae {
    if (!id) throw new Error("id cannot be undefined");
    const urlTplParams = getPathParameters(this.pathParameters);
    urlTplParams["directoryObject%2Did"] = id;
    return new ibb1775edc8b00d6847216de6125761519cda46437475647d9e60f76954f077ae(
      urlTplParams,
      this.requestAdapter
    );
  }
  /**
   * Gets an item from the ApiSdk.users.item.ownedObjects.item collection
   * @param id Unique identifier of the item
   * @returns a DirectoryObjectItemRequestBuilder
   */
  public ownedObjectsById(
    id: string
  ): i98442ed3c02b04c2ea2cc3066430c127966655dd1b8dca84cb0f918302ae7194 {
    if (!id) throw new Error("id cannot be undefined");
    const urlTplParams = getPathParameters(this.pathParameters);
    urlTplParams["directoryObject%2Did"] = id;
    return new i98442ed3c02b04c2ea2cc3066430c127966655dd1b8dca84cb0f918302ae7194(
      urlTplParams,
      this.requestAdapter
    );
  }
  /**
   * Update the properties of a user object. Not all properties can be updated by Member or Guest users with their default permissions without Administrator roles. Compare member and guest default permissions to see properties they can manage.
   * @param body
   * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
   * @param responseHandler Response handler to use in place of the default response handling provided by the core service
   */
  public patch(
    body: User | undefined,
    requestConfiguration?:
      | UserItemRequestBuilderPatchRequestConfiguration
      | undefined,
    responseHandler?: ResponseHandler | undefined
  ): Promise<void> {
    if (!body) throw new Error("body cannot be undefined");
    const requestInfo = this.createPatchRequestInformation(
      body,
      requestConfiguration
    );
    return (
      this.requestAdapter?.sendNoResponseContentAsync(
        requestInfo,
        responseHandler,
        {}
      ) ?? Promise.reject(new Error("request adapter is null"))
    );
  }
  /**
   * Gets an item from the ApiSdk.users.item.photos.item collection
   * @param id Unique identifier of the item
   * @returns a ProfilePhotoItemRequestBuilder
   */
  public photosById(id: string): ProfilePhotoItemRequestBuilder {
    if (!id) throw new Error("id cannot be undefined");
    const urlTplParams = getPathParameters(this.pathParameters);
    urlTplParams["profilePhoto%2Did"] = id;
    return new ProfilePhotoItemRequestBuilder(
      urlTplParams,
      this.requestAdapter
    );
  }
  /**
   * Gets an item from the ApiSdk.users.item.registeredDevices.item collection
   * @param id Unique identifier of the item
   * @returns a DirectoryObjectItemRequestBuilder
   */
  public registeredDevicesById(
    id: string
  ): ib10e13dd31dd16fe44cd02de693cacca2390370a3334683b4e37c5ee8b0d9e75 {
    if (!id) throw new Error("id cannot be undefined");
    const urlTplParams = getPathParameters(this.pathParameters);
    urlTplParams["directoryObject%2Did"] = id;
    return new ib10e13dd31dd16fe44cd02de693cacca2390370a3334683b4e37c5ee8b0d9e75(
      urlTplParams,
      this.requestAdapter
    );
  }
  /**
   * Gets an item from the ApiSdk.users.item.transitiveMemberOf.item collection
   * @param id Unique identifier of the item
   * @returns a DirectoryObjectItemRequestBuilder
   */
  public transitiveMemberOfById(
    id: string
  ): i5b7723796b9ab65897fb41e71fbf92926338e0d88e2286f616e6e58348a1e1ed {
    if (!id) throw new Error("id cannot be undefined");
    const urlTplParams = getPathParameters(this.pathParameters);
    urlTplParams["directoryObject%2Did"] = id;
    return new i5b7723796b9ab65897fb41e71fbf92926338e0d88e2286f616e6e58348a1e1ed(
      urlTplParams,
      this.requestAdapter
    );
  }
  /**
   * Gets an item from the ApiSdk.users.item.transitiveReports.item collection
   * @param id Unique identifier of the item
   * @returns a DirectoryObjectItemRequestBuilder
   */
  public transitiveReportsById(
    id: string
  ): ifa5ee9e926fd626bdf27cc2feeb41f5c4fa82f779afc20fef1da6f0cfd404e58 {
    if (!id) throw new Error("id cannot be undefined");
    const urlTplParams = getPathParameters(this.pathParameters);
    urlTplParams["directoryObject%2Did"] = id;
    return new ifa5ee9e926fd626bdf27cc2feeb41f5c4fa82f779afc20fef1da6f0cfd404e58(
      urlTplParams,
      this.requestAdapter
    );
  }
}

export function userItemRequestBuilder(
  root: UserItemRequestBuilder
): UserItemRequestBuilder {
  if (typeof root === "object" && !Reflect.has(root, "length")) {
    root = (<any>root)._root;
  }

  return new UserItemRequestBuilder(<any>root);
}
