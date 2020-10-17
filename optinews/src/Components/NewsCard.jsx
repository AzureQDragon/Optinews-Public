import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function NewsCard() {
  return (
    <div>
      <Card style={{ width: '60rem' }}>
        <Card.Body>
          <Card.Title>Covid Vaccine has been found</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            facilisis dignissim mauris et lacinia. Integer pulvinar eros ac
            velit vulputate, a elementum arcu convallis. Curabitur bibendum,
            velit non cursus feugiat, neque augue vestibulum ipsum, quis lacinia
            lorem nulla non ante. Nullam venenatis orci in dolor aliquam blandit
            a a tortor. Integer egestas libero ut dolor volutpat, at mollis
            lorem vehicula. Vivamus eget mollis justo. Curabitur ac neque
            lobortis, porttitor nunc non, volutpat lacus. Sed vitae dui non leo
            maximus porta. Proin viverra suscipit nisi, vitae congue justo
            congue in. Morbi consequat odio vel mi cursus maximus. Etiam eu
            luctus orci. Suspendisse ornare consectetur congue.
          </Card.Text>
          <Button variant='primary'>View full article</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default NewsCard;
