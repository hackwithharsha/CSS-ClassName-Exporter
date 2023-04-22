document.getElementById('exportButton').addEventListener('click', () => {
    chrome.storage.local.get(['classNames'], result => {
      const classNames = result.classNames;

      const csvContent = 'data:text/csv;charset=utf-8,'
        + classNames.map(className => `"${className}"`).join('\n') + '\r\n';

      const encodedUri = encodeURI(csvContent);
      const link = document.createElement('a');
      link.setAttribute('href', encodedUri);
      link.setAttribute('download', 'css_classname_exporter.csv');
      document.body.appendChild(link);
      link.click();
    });
  });