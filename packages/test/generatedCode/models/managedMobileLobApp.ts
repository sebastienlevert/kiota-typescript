import {ManagedApp, MobileAppContent} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedMobileLobApp extends ManagedApp, Partial<Parsable> {
    /** The internal committed content version. */
    committedContentVersion?: string;
    /** The list of content versions for this app. */
    contentVersions?: MobileAppContent[];
    /** The name of the main Lob application file. */
    fileName?: string;
    /** The total size, including all uploaded files. */
    size?: number;
}
