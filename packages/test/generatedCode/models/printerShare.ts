import {Group, Printer, PrinterBase, User} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrinterShare extends Partial<Parsable>, PrinterBase {
    /** If true, all users and groups will be granted access to this printer share. This supersedes the allow lists defined by the allowedUsers and allowedGroups navigation properties. */
    allowAllUsers?: boolean;
    /** The groups whose users have access to print using the printer. */
    allowedGroups?: Group[];
    /** The users who have access to print using the printer. */
    allowedUsers?: User[];
    /** The DateTimeOffset when the printer share was created. Read-only. */
    createdDateTime?: Date;
    /** The printer that this printer share is related to. */
    printer?: Printer;
}
