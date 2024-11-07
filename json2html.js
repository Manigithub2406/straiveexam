// json2html.js

export default function json2html(data) {
  // Create the opening table tag with the data-user attribute
  let html = '<table data-user="mani.dmk100@gmail.com">';

  // Create the table header row
  html += '<thead><tr><th>Name</th><th>Age</th><th>Gender</th></tr></thead>';
  
  // Create the table body with rows for each object in the data array
  html += '<tbody>';
  data.forEach(item => {
    html += '<tr>';
    html += `<td>${item.Name}</td><td>${item.Age}</td>`;
    html += item.Gender ? `<td>${item.Gender}</td>` : ''; // Add gender if it exists
    html += '</tr>';
  });
  html += '</tbody>';
  
  // Close the table tag
  html += '</table>';
  
  return html;
}
