import { Comment, TextChange } from '@/shared/proto';

export enum BlockIndex {
  leftFile,
  rightFile,
}

// Code line of a block of code
export interface BlockLine {
  code: string;
  clearCode: string;
  lineNumber: number;
  // Is the line a placeholder?
  isPlaceholder: boolean;
  // Is "add new comment" UI displayed?
  isNewCommentVisible: boolean;
  comments: Comment[];
  isChanged: boolean;
  textChange?: TextChange;
}

// Line of code changes (left and right blocks)
export interface ChangesLine {
  // We keep it as an array to display blocks by ngFor
  blocks: BlockLine[];
  // Is the line a line with comments?
  isCommentsLine: boolean;
  commentsLine: ChangesLine;
}
