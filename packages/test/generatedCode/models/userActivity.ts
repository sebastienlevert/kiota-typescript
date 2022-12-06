import {ActivityHistoryItem, Entity, Json, VisualInfo} from './index';
import {Status} from './status';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UserActivity extends Entity, Partial<Parsable> {
    /** Required. URL used to launch the activity in the best native experience represented by the appId. Might launch a web-based app if no native app exists. */
    activationUrl?: string;
    /** Required. URL for the domain representing the cross-platform identity mapping for the app. Mapping is stored either as a JSON file hosted on the domain or configurable via Windows Dev Center. The JSON file is named cross-platform-app-identifiers and is hosted at root of your HTTPS domain, either at the top level domain or include a sub domain. For example: https://contoso.com or https://myapp.contoso.com but NOT https://myapp.contoso.com/somepath. You must have a unique file and domain (or sub domain) per cross-platform app identity. For example, a separate file and domain is needed for Word vs. PowerPoint. */
    activitySourceHost?: string;
    /** Required. The unique activity ID in the context of the app - supplied by caller and immutable thereafter. */
    appActivityId?: string;
    /** Optional. Short text description of the app used to generate the activity for use in cases when the app is not installed on the user’s local device. */
    appDisplayName?: string;
    /** Optional. A custom piece of data - JSON-LD extensible description of content according to schema.org syntax. */
    contentInfo?: Json;
    /** Optional. Used in the event the content can be rendered outside of a native or web-based app experience (for example, a pointer to an item in an RSS feed). */
    contentUrl?: string;
    /** Set by the server. DateTime in UTC when the object was created on the server. */
    createdDateTime?: Date;
    /** Set by the server. DateTime in UTC when the object expired on the server. */
    expirationDateTime?: Date;
    /** Optional. URL used to launch the activity in a web-based app, if available. */
    fallbackUrl?: string;
    /** Optional. NavigationProperty/Containment; navigation property to the activity's historyItems. */
    historyItems?: ActivityHistoryItem[];
    /** Set by the server. DateTime in UTC when the object was modified on the server. */
    lastModifiedDateTime?: Date;
    /** Set by the server. A status code used to identify valid objects. Values: active, updated, deleted, ignored. */
    status?: Status;
    /** Optional. The timezone in which the user's device used to generate the activity was located at activity creation time; values supplied as Olson IDs in order to support cross-platform representation. */
    userTimezone?: string;
    /** The visualElements property */
    visualElements?: VisualInfo;
}
