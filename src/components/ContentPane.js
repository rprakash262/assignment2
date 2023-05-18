import { Routes, Route, useLocation } from 'react-router-dom';

import Create from '../routes/Create';
import Open from '../routes/Open';
import Share from '../routes/Share';
import Download from '../routes/Download';
import Print from '../routes/Print';
import Undo from '../routes/Undo';
import Redo from '../routes/Redo';
import Cut from '../routes/Cut';
import Paste from '../routes/Paste';
import SelectAll from '../routes/SelectAll';
import Image from '../routes/Image';
import Video from '../routes/Video';
import Link from '../routes/Link';
import Table from '../routes/Table';
import Drawing from '../routes/Drawing';
import Chart from '../routes/Chart';
import Code from '../routes/Code';
import Text from '../routes/Text';
import Paragraph from '../routes/Paragraph';
import Table2 from '../routes/Table2';
import Alignment from '../routes/Alignment';
import Borders from '../routes/Borders';
import Lists from '../routes/Lists';

const mainItems = {
  'file': ['create', 'open', 'share', 'download', 'print'],
  'edit': ['undo', 'redo', 'cut', 'paste', 'select_all'],
  'insert': ['image', 'video', 'link', 'table', 'drawing', 'chart', 'code'],
  'format': ['text', 'paragraph', 'table', 'alignment', 'borders', 'lists']
}

const getSchema = () => {

}

const ContentPane = () => {
  const location = useLocation()
  const currentRoute = location.pathname;
  const control = currentRoute.slice(currentRoute.lastIndexOf('/') + 1)
  const menuItem = currentRoute.slice(1, currentRoute.lastIndexOf('/'))

  return (
    <div id="contentPane">
      <Routes>
        <Route
          path='/file/create'
          element={<Create
            menuItem={menuItem}
            control={control}
            currentRoute={currentRoute}
          />}
        />
        <Route
          path='/file/open'
          element={<Open
            menuItem={menuItem}
            control={control}
            currentRoute={currentRoute}
          />}
        />
        <Route
          path='/file/share'
          element={<Share
            menuItem={menuItem}
            control={control}
            currentRoute={currentRoute}
          />}
        />
        <Route
          path='/file/download'
          element={<Download
            menuItem={menuItem}
            control={control}
            currentRoute={currentRoute}
          />}
        />
        <Route
          path='/file/print'
          element={<Print
            menuItem={menuItem}
            control={control}
            currentRoute={currentRoute}
          />}
        />
        <Route
          path='/edit/undo'
          element={<Undo
            menuItem={menuItem}
            control={control}
            currentRoute={currentRoute}
          />}
        />
        <Route
          path='/edit/redo'
          element={<Redo
            menuItem={menuItem}
            control={control}
            currentRoute={currentRoute}
          />}
        />
        <Route
          path='/edit/cut'
          element={<Cut
            menuItem={menuItem}
            control={control}
            currentRoute={currentRoute}
          />}
        />
        <Route
          path='/edit/paste'
          element={<Paste
            menuItem={menuItem}
            control={control}
            currentRoute={currentRoute}
          />}
        />
        <Route
          path='/edit/select_all'
          element={<SelectAll
            menuItem={menuItem}
            control={control}
            currentRoute={currentRoute}
          />}
        />
        <Route
          path='/insert/image'
          element={<Image
            menuItem={menuItem}
            control={control}
            currentRoute={currentRoute}
          />}
        />
        <Route
          path='/insert/video'
          element={<Video
            menuItem={menuItem}
            control={control}
            currentRoute={currentRoute}
          />}
        />
        <Route
          path='/insert/link'
          element={<Link
            menuItem={menuItem}
            control={control}
            currentRoute={currentRoute}
          />}
        />
        <Route
          path='/insert/table'
          element={<Table
            menuItem={menuItem}
            control={control}
            currentRoute={currentRoute}
          />}
        />
        <Route
          path='/insert/drawing'
          element={<Drawing
            menuItem={menuItem}
            control={control}
            currentRoute={currentRoute}
          />}
        />
        <Route
          path='/insert/chart'
          element={<Chart
            menuItem={menuItem}
            control={control}
            currentRoute={currentRoute}
          />}
        />
        <Route
          path='/insert/code'
          element={<Code
            menuItem={menuItem}
            control={control}
            currentRoute={currentRoute}
          />}
        />
        <Route
          path='/format/text'
          element={<Text
            menuItem={menuItem}
            control={control}
            currentRoute={currentRoute}
          />}
        />
        <Route
          path='/format/paragraph'
          element={<Paragraph
            menuItem={menuItem}
            control={control}
            currentRoute={currentRoute}
          />}
        />
        <Route
          path='/format/table'
          element={<Table2
            menuItem={menuItem}
            control={control}
            currentRoute={currentRoute}
          />}
        />
        <Route
          path='/format/alignment'
          element={<Alignment
            menuItem={menuItem}
            control={control}
            currentRoute={currentRoute}
          />}
        />
        <Route
          path='/format/borders'
          element={<Borders
            menuItem={menuItem}
            control={control}
            currentRoute={currentRoute}
          />}
        />
        <Route
          path='/format/lists'
          element={<Lists
            menuItem={menuItem}
            control={control}
            currentRoute={currentRoute}
          />}
        />
      </Routes>
    </div>
  )
}

export default ContentPane;